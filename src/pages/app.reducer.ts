import IGlobalTypes from 'utils/global-types'
import IAppTypes from './app.types'
import { initialState, appTypes } from './app.types'

const appReducer:IGlobalTypes.IReducer<IAppTypes.IAppState> = (state = initialState, action) => {
  switch (action.type) {
  case appTypes.APP_SET_SIDEBAR_STATUS: {
    const { menu, subMenu }:IAppTypes.ISelectMenuPayload = action.payload
    const nothingSubMenu = state.sidebar.menu.find(m => m.menu === menu)?.subMenu.length === 0
    if(subMenu) {
      return {
        ...state,
        sidebar:{
          ...state.sidebar,
          status:'hideSubMenu',
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
            return { ...menuItem, selected:false }
          })
        }
      }
    }
    return {
      ...state,
      sidebar:{
        ...state.sidebar,
        status:nothingSubMenu ? 'hideSubMenu' : 'showAll',
        menu:state.sidebar.menu.map(menuItem => {
          if(menuItem.menu) {
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