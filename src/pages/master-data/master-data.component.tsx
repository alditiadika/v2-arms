import React, { Fragment } from 'react'
import { Route, Routes } from 'react-router-dom'
import RedirectDefaultPath from 'components/atoms/redirect-default-path'
import { ErrorNotFound } from 'components/templates/errors'
import Notification from './notification'

const pathConditionReturn = ['/master-data', '/master-data/']
const MasterData:React.FC = () => {
  return (
    <Fragment>
      <RedirectDefaultPath from={pathConditionReturn} to='/master-data/notification' />
      <Routes>
        <Route path='/notification' element={<Notification/>} />      
        <Route path='*' element={<ErrorNotFound/>} />
      </Routes>
    </Fragment>
  )
}
export default MasterData