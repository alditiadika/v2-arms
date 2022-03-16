import React, { CSSProperties, Fragment, useEffect } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import { connect, useSelector } from 'react-redux'
import { IGlobalState } from 'store/reducers'

import { navbarStyle, sidebarStyle } from 'utils/constants'
import { ErrorBoundary } from 'components/templates/errors'
import Navbar from 'components/templates/navbar'
import Sidebar from 'components/templates/sidebar'

import MainRoutes from './routes'
import AuthComponent from './login'
import { AuthTypes as IAuthTypes } from './login'
import IAppTypes from './app.types'
import RedirectDefaultPath from 'components/atoms/redirect-default-path'
import appAction from './app.action'

type StylerFn = (n:IAppTypes.INavbarState, s:IAppTypes.ISidebarState) => CSSProperties
type TProps = {
  checkPath:IAppTypes.IAppActionCheckPath
}
const mapDispatchToProps:TProps = {
  checkPath: appAction.appActionCheckPath
}
const App:React.FC<TProps> = ({ checkPath }) => {
  const location = useLocation()
  const { isAuthenticated } = 
    useSelector<IGlobalState, IAuthTypes.IAuthState>(state => state.auth)
  const conditionLogout = location.pathname !== '/login' && !isAuthenticated

  const { navbar, sidebar } = 
    useSelector<IGlobalState, IAppTypes.IAppState>(state => state.app)
    
  const styler:StylerFn = (nav, side) => {
    const style:CSSProperties = {}
    if(nav.show) style.marginTop = navbarStyle.height
    if(side.status !== 'hideAll') style.marginLeft = sidebarStyle.menuWidth
    return style
  }
  useEffect(() => {
    checkPath({ location, allMenu:sidebar.menu })
  }, [])
  return (
    <ErrorBoundary>
      {isAuthenticated && (
        <Fragment>
          <Navbar/>
          <Sidebar/>
        </Fragment>
      )}
      {conditionLogout && (
        <RedirectDefaultPath from={location.pathname} to='/login' />
      )}
      <main style={styler(navbar, sidebar)}>
        <Routes>
          <Route path='/login' element={<AuthComponent/>} />
          <Route path='/*' element={<MainRoutes/>} />
        </Routes>
      </main>
    </ErrorBoundary>
  )
}

export default connect(null, mapDispatchToProps)(App)