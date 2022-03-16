import IAppTypes from './app.types'
import { appTypes } from './app.types'

const appActionSelectMenu:IAppTypes.IAppActionSelectMenu = payload => dispatch => {
  dispatch({ type:appTypes.APP_SELECT_MENU, payload })
}
const appActionClickToggleNav:IAppTypes.IAppActionToggleSidebar = () => dispatch => {
  dispatch({ type: appTypes.TOGGLE_SIDEBAR, payload:null })
}
const appActionSetFullscreen:IAppTypes.IAppActionSetFullScreen = () => dispatch => {
  const requestFullscreen = !document.fullscreenElement
  const docElm = document.documentElement
  if(requestFullscreen) docElm.requestFullscreen()
  else document.exitFullscreen()
  dispatch({ type: appTypes.APP_SET_FULLSCREEN, payload:requestFullscreen })
}
const appActionCheckPath:IAppTypes.IAppActionCheckPath = ({ location, allMenu }) => dispatch => {
  const [, pathMenu, pathSubMenu] = location.pathname.split('/')
  const menu = allMenu.find(m => m.path.slice(1) === pathMenu)
  if(menu) {
    const subMenu = menu.subMenu.find(m => m.path.slice(1) === pathSubMenu)
    const payload:IAppTypes.ISelectMenuPayload = {
      menu:menu.menu,
      subMenu:subMenu ? subMenu.subMenuName : null
    }
    dispatch({ type:appTypes.APP_SELECT_MENU, payload })
  }
}
export default {
  appActionSelectMenu,
  appActionClickToggleNav,
  appActionSetFullscreen,
  appActionCheckPath
}