import React, { Fragment } from 'react'
import { Route, Routes } from 'react-router-dom'
import About from './about'
import Profile from './profile'
import RedirectDefaultPath from 'components/atoms/redirect-default-path'
import { ErrorNotFound } from 'components/templates/errors'

const Dashboard:React.FC = () => {
  return (
    <Fragment>
      <RedirectDefaultPath from='/home' to='/home/profile' />
      <Routes>
        <Route path='/profile' element={<Profile/>} />
        <Route path='/about' element={<About/>} />
        <Route path='*' element={<ErrorNotFound/>} />
      </Routes>
    </Fragment>
  )
}
export default Dashboard