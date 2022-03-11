import IAppTypes from './app.types'
import { appTypes } from './app.types'

const appActionSelectMenu:IAppTypes.IAppActionSelectMenu = payload => dispatch => {
  console.log(payload, dispatch)
}
const appActionClickToggleNav:IAppTypes.IAppActionToggleSidebar = () => dispatch => {
  dispatch({ type: appTypes.TOGGLE_SIDEBAR, payload:null })
}
export default {
  appActionSelectMenu,
  appActionClickToggleNav
}