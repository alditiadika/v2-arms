import React, { Fragment } from 'react'
import {
  Routes, 
  Route
} from 'react-router-dom'
import Home from './home'
import RedirectDefaultPath from 'components/atoms/redirect-default-path'
import { ErrorNotFound } from 'components/templates/errors'

const MainRoutes:React.FC = () => {
  return (
    <Fragment>
      <RedirectDefaultPath from='/' to='/home' />
      <Routes>
        <Route path='/home/*' element={<Home/>} />    
        <Route path='*' element={<ErrorNotFound/>} />
      </Routes>
    </Fragment>
  )
}
export default MainRoutes