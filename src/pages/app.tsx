import React from 'react'
import { Routes, Route, Navigate, useLocation } from 'react-router-dom'
import { ErrorBoundary } from 'components/templates/errors'

import AuthComponent from './auth'
import MainRoutes from './routes'
import { useSelector } from 'react-redux'
import { IGlobalState } from 'store'
import { AuthTypes as IAuthTypes } from './auth'


const App:React.FC = () => {
  const { isAuthenticated } = useSelector<IGlobalState, IAuthTypes.IAuthState>(state => state.auth)
  const location = useLocation()
  const condition = location.pathname !== '/login' && !isAuthenticated
  if(condition) return <Navigate to='/login' replace={true} />
  return (
    <ErrorBoundary>
      <Routes>
        <Route path='/login' element={<AuthComponent/>} />
        <Route path='/*' element={<MainRoutes/>} />
      </Routes>
    </ErrorBoundary>
  )
}

export default App