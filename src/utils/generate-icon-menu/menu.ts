import { SvgIconTypeMap } from '@mui/material'
import { OverridableComponent } from '@mui/material/OverridableComponent'
import {
  Dashboard,
  Ballot as MasterData,
  AssignmentInd as Employee,
  Sync as Transaction,
  Assignment as Report,
  Settings as ControlPanel
} from '@mui/icons-material'
import IAppTypes from 'pages/app.types'

type TFunc = (menu:IAppTypes.TMenu) => OverridableComponent<SvgIconTypeMap> & { muiName: string }

const generateIconMenu:TFunc = (menu) => {
  switch(menu) {
  case 'dashboard':
    return Dashboard
  case 'masterData':
    return MasterData
  case 'employee':
    return Employee
  case 'transaction':
    return Transaction
  case 'report':
    return Report
  case 'controlPanel':
    return ControlPanel
  default:
    return Dashboard
  }
}
export default generateIconMenu