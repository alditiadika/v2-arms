import React, { CSSProperties, Fragment } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { IGlobalState } from 'store/reducers'

import { navbarStyle, sidebarStyle } from 'utils/constants'
import { ErrorBoundary } from 'components/templates/errors'
import Navbar from 'components/templates/navbar'

import MainRoutes from './routes'
import AuthComponent from './login'
import { AuthTypes as IAuthTypes } from './login'
import IAppTypes from './app.types'
import RedirectDefaultPath from 'components/atoms/redirect-default-path'

type StylerFn = (n:IAppTypes.INavbarState, s:IAppTypes.ISidebarState) => CSSProperties
const App:React.FC = () => {
  const location = useLocation()
  const { isAuthenticated } = useSelector<IGlobalState, IAuthTypes.IAuthState>(state => state.auth)
  const conditionLogout = location.pathname !== '/login' && !isAuthenticated

  const { navbar, sidebar } = useSelector<IGlobalState, IAppTypes.IAppState>(state => state.app)
  const styler:StylerFn = (nav, side) => {
    const style:CSSProperties = {}
    if(nav.show) style.marginTop = navbarStyle.height
    if(side.status === 'hideSubMenu') style.marginLeft = sidebarStyle.menuWidth
    return style
  }
  return (
    <ErrorBoundary>
      {isAuthenticated && (
        <Fragment>
          <Navbar/>
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

export default App