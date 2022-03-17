import { pathList } from 'utils/constants'
import IGlobalTypes from 'utils/global-types'
import IAppTypes from './app.types'
import { initialState, appTypes } from './app.types'

const appReducer:IGlobalTypes.IReducer<IAppTypes.IAppState> = (state = initialState, action) => {
  switch (action.type) {
  case appTypes.APP_SELECT_MENU: {
    const { menu, subMenu }:IAppTypes.ISelectMenuPayload = action.payload
    const menuFind = state.sidebar.menu.find(m => m.menu === menu)
    const nothingSubMenu = menuFind?.subMenu.length === 0
    const menuSelected:IAppTypes.ISidebarState['selectedMenu'] = { 
      menu,
      pathMenu:menuFind?.path || pathList.dashboard.path,
      subMenu:subMenu ? undefined : subMenu,
      pathSubMenu:subMenu ? undefined : menuFind?.subMenu[0]?.path
    }

    if(subMenu) {
      return {
        ...state,
        sidebar:{
          ...state.sidebar,
          status:'hideSubMenu',
          selectedMenu:menuSelected,
          menu:state.sidebar.menu.map(menuItem => {
            if(menuItem.menu === menu) {
              return {
                ...menuItem,
                selected:true,
                subMenu:menuItem.subMenu.map(subMenuItem => {
                  if(subMenuItem.subMenuName === subMenu) {
                    return { ...subMenuItem, selected:true }
                  }
                  return { ...subMenuItem, selected:false }
                })
              }
            }
            return { 
              ...menuItem, selected:false,
              subMenu:menuItem.subMenu.map(subMenuItem => {
                return { ...subMenuItem, selected:false }
              }) 
            }
          })
        }
      }
    }
    return {
      ...state,
      sidebar:{
        ...state.sidebar,
        status:nothingSubMenu ? 'hideSubMenu' : 'showAll',
        selectedMenu:menuSelected,
        menu:state.sidebar.menu.map(menuItem => {
          if(menuItem.menu === menu) {
            return { ...menuItem, selected:true }
          }
          return { ...menuItem, selected:false }
        })
      }
    }
  }
  case appTypes.TOGGLE_SIDEBAR: {
    const status:IAppTypes.TSidebarStatus = state.sidebar.status === 'hideSubMenu' ? 
      'hideAll' : 'hideSubMenu'
    return {
      ...state,
      sidebar:{
        ...state.sidebar,
        status
      }
    }
  }
  case appTypes.APP_SET_FULLSCREEN: {
    const fullScreen:boolean = action.payload
    return {
      ...state,
      navbar: {
        ...state.navbar,
        fullScreen
      }
    }
  }
  case appTypes.APP_SET_TOTAL_NOTIFICATION: {
    const totalNotification:number = action.payload
    return {
      ...state,
      navbar: {
        ...state.navbar,
        totalNotification
      }
    }
  }
  default:
    return state
  }
}
export default appReducer