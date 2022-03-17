import React, { Fragment } from 'react'
import {
  Routes, 
  Route
} from 'react-router-dom'
import Home from './home'
import RedirectDefaultPath from 'components/atoms/redirect-default-path'
import { ErrorNotFound } from 'components/templates/errors'
import MasterData from './master-data'
import { pathList } from 'utils/constants'

const MainRoutes:React.FC = () => {
  return (
    <Fragment>
      <RedirectDefaultPath from='/' to={pathList.dashboard.path} />
      <Routes>
        <Route path={pathList.dashboard.path} element={<Home/>} />    
        <Route path='/master-data/*' element={<MasterData/>} />    
        <Route path='*' element={<ErrorNotFound/>} />
      </Routes>
    </Fragment>
  )
}
export default MainRoutes