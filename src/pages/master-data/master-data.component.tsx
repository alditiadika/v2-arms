import React, { Fragment } from 'react'
import { Route, Routes } from 'react-router-dom'
import RedirectDefaultPath from 'components/atoms/redirect-default-path'
import { ErrorNotFound } from 'components/templates/errors'
import Notification from './notification'
import { pathList } from 'utils/constants'

const pathConditionReturn = [pathList.masterData.path, pathList.masterData.path + '/']
const pathReturned = pathList.masterData.path + pathList.masterData.subModule.notification
const MasterData:React.FC = () => {
  return (
    <Fragment>
      <RedirectDefaultPath from={pathConditionReturn} to={pathReturned} />
      <Routes>
        <Route 
          path={pathList.masterData.subModule.notification} 
          element={<Notification/>} 
        />      
        <Route path='*' element={<ErrorNotFound/>} />
      </Routes>
    </Fragment>
  )
}
export default MasterData