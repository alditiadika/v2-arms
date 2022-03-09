import React, { CSSProperties } from 'react'
import { Routes, Route, Navigate, useLocation } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { IGlobalState } from 'store'

import { navbarStyle, sidebarStyle } from 'utils/constants'
import { ErrorBoundary } from 'components/templates/errors'
import Navbar from 'components/templates/navbar'

import MainRoutes from './routes'
import AuthComponent from './login'
import { AuthTypes as IAuthTypes } from './login'
import IAppTypes from './app.types'

const App:React.FC = () => {
  const { isAuthenticated } = useSelector<IGlobalState, IAuthTypes.IAuthState>(state => state.auth)
  const location = useLocation()
  const condition = location.pathname !== '/login' && !isAuthenticated
  if(condition) return <Navigate to='/login' replace={true} />

  const { navbar, sidebar } = useSelector<IGlobalState, IAppTypes.IAppState>(state => state.app)
  const styler:(n:typeof navbar, s: typeof sidebar) => CSSProperties = (nav, side) => {
    const style:CSSProperties = {}
    if(nav.show) style.marginTop = navbarStyle.height
    if(side.status === 'hideSubMenu') style.marginLeft = sidebarStyle.menuWidth
    return style
  }
  return (
    <ErrorBoundary>
      {isAuthenticated && <Navbar/>}
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