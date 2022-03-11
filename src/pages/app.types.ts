import { subMenuList } from 'utils/constants'
import IGlobalTypes from 'utils/global-types'

type TMasterDataField = 'notification' | 'workOrder' | 'reservation' |
  'unitOfMeasure' | 'employeeClassification' | 'toolsEquipment' |
  'defectSource' | 'defectGroup' | 'defectPriority' | 'reasonForCancelation' |
  'department' | 'workShift' | 'scheduleType' | 'woExecutionPriority' | 
  'executionLocation' | 'jobAttachmentNotes' | 'formBuilder' | 'formBuilderType' |
  'library' | 'libraryType'

type TEmployeeField = 'employeeProfile' | 'employeeRoster' | 'employeeAuthorization' |
  'employeeRole' | 'userDelegation' | 'matrixApproval'

type TTransactionField = 'woPOS' | 'woSchedule' | 'sqcManagement' | 'defectManagement' |
  'machineDown' | 'timeCard' | 'crewManagement' | 'downtimeStatus' | 'actionTakenStatus' |
  'delayStatus' | 'oportunityStatus' | 'failureCodeStatus' | 'woStatus'

type TReportField = 'woSCHCompliance' | 'plannedDuration' | 'effectiveUtilization' |
  'defectCompliance' | 'sqcCompliance'

type TMenuGroup = 'dashboard' | 
  'sap' | 'value_list' | 
  'employee' | 
  'transaction' | 'inbound' |
  'report' |
  'control_panel'

type TMenu = 'dashboard' | 'masterData' | 'employee' | 'transaction' | 'report' | 'controlPanel'

type TItem = { title:string, show:boolean, selected:boolean, path:string }
declare namespace IAppTypes {
  interface ISubMenuItem extends TItem {
    subMenuName:TMasterDataField | TEmployeeField | TTransactionField | TReportField
    group:TMenuGroup
  }
  interface IMenuItem extends TItem {
    menu:TMenu
    subMenu:ISubMenuItem[]
  }
  type TSidebarStatus = 'showAll' | 'hideAll' | 'hideSubMenu'  
  interface ISidebarState {
    status:TSidebarStatus
    menu:IMenuItem[]
  }
  interface INavbarState {
    fullScreen:boolean
    totalNotification:number
    show:boolean
  }
  interface IAppState {
    name:string
    version:string
    sidebar:ISidebarState
    navbar:INavbarState
  }
  type ISelectMenuPayload = { 
    menu:TMenu, 
    subMenu:TMasterDataField | TEmployeeField | TTransactionField | TReportField | null 
  }
  type IAppActionSelectMenu = IGlobalTypes.IAction<ISelectMenuPayload>
  type IAppActionSetSidebarStatus = IGlobalTypes.IAction<TSidebarStatus>
  type IAppActionSetFullScreen = IGlobalTypes.IAction<boolean>
  type IAppActionSetTotalNotification = IGlobalTypes.IAction<number>
  type IAppActionToggleSidebar = IGlobalTypes.IAction<void>
}
export default IAppTypes

export const initialState:IAppTypes.IAppState = {
  name:process.env.APP_NAME || 'ARMS',
  version:process.env.APP_VERSION || '',
  navbar:{ fullScreen:false, totalNotification:0, show:true },
  sidebar:{
    status:'hideSubMenu',
    menu:[
      { menu:'dashboard', title:'Dashboard', selected:true, path:'/dashboard', show:true, subMenu:[] },
      { 
        menu:'masterData', title:'Master Data', selected:false, 
        path:'/master-data', show:true, subMenu:subMenuList.masterDataSubMenu 
      },
      { 
        menu:'employee', title:'Employee', selected:false, 
        path:'/employee', show:true, subMenu:subMenuList.employeeSubMenu 
      },
      { 
        menu:'transaction', title:'Transaction', selected:false, 
        path:'/transaction', show:true, subMenu:subMenuList.transactionMenu 
      },
      { 
        menu:'report', title:'Reports', selected:false, 
        path:'/report', show:true, subMenu:subMenuList.reportMenu 
      },
      { 
        menu:'controlPanel', title:'Control Panel', selected:false, 
        path:'/control-panel', show:true, subMenu:[] 
      },
    ]
  }
}
export const appTypes = {
  APP_SET_SIDEBAR_STATUS:'APP TYPES SET SIDEBAR STATUS',
  APP_SET_FULLSCREEN:'APP TYPES SET FULLSCREEN',
  APP_SET_TOTAL_NOTIFICATION:'APP TYPES SET TOTAL NOTIFICATION',
  TOGGLE_SIDEBAR:'APP TYPES TOGGLE SIDEBAR',
}