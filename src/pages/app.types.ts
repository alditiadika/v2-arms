import { Location as ReactDOMLocation } from 'react-router-dom'
import { pathList, subMenuList } from 'utils/constants'
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

 
  type TItem = { 
    readonly title:string, 
    show:boolean, 
    selected:boolean, 
    readonly path:string 
  }
  declare namespace IAppTypes {
    type TMenuGroup = 'dashboard' | 
      'sap' | 'value_list' | 
      'employee' | 
      'transaction' | 'inbound' |
      'report' |
      'control_panel'
    
    type TMenu = 'dashboard' | 'masterData' | 'employee' | 'transaction' | 'report' | 'controlPanel'
    type TSubMenu = TMasterDataField | TEmployeeField | TTransactionField | TReportField
    interface ISubMenuItem extends TItem {
    subMenuName:Readonly<TSubMenu>
    group:Readonly<TMenuGroup>
  }
  interface IMenuItem extends TItem {
    menu:Readonly<TMenu>
    subMenu:ISubMenuItem[]
    group:Readonly<TMenuGroup[]>
  }
  type TSidebarStatus = 'showAll' | 'hideAll' | 'hideSubMenu'  
  interface ISidebarState {
    status:TSidebarStatus
    menu:IMenuItem[]
    selectedMenu:{ 
      menu:TMenu, subMenu?:TSubMenu | null,
      pathMenu:string, pathSubMenu?:string 
    }
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
  type TCheckPathPayload = {
    location:ReactDOMLocation,
    allMenu:IMenuItem[]
  }
  type IAppActionSelectMenu = IGlobalTypes.IAction<ISelectMenuPayload>
  type IAppActionSetSidebarStatus = IGlobalTypes.IAction<TSidebarStatus>
  type IAppActionSetFullScreen = IGlobalTypes.IAction<void>
  type IAppActionSetTotalNotification = IGlobalTypes.IAction<number>
  type IAppActionToggleSidebar = IGlobalTypes.IAction<void>
  type IAppActionCheckPath = IGlobalTypes.IAction<TCheckPathPayload>
}
export default IAppTypes

export const initialState:IAppTypes.IAppState = {
  name:process.env.APP_NAME || 'ARMS',
  version:process.env.APP_VERSION || '',
  navbar:{ fullScreen:false, totalNotification:10, show:true },
  sidebar:{
    status:'hideSubMenu',
    selectedMenu:{ menu:'dashboard', pathMenu:pathList.dashboard.path },
    menu:[
      { 
        menu:'dashboard', title:'Dashboard', selected:true, group:['dashboard'],
        path:pathList.dashboard.path, show:true, subMenu:[] 
      },
      { 
        menu:'masterData', title:'Master Data', selected:false, group:['sap', 'value_list'], 
        path:pathList.masterData.path, show:true, subMenu:subMenuList.masterDataSubMenu 
      },
      { 
        menu:'employee', title:'Employee', selected:false, group:['employee'], 
        path:pathList.employee.path, show:true, subMenu:subMenuList.employeeSubMenu 
      },
      { 
        menu:'transaction', title:'Transaction', selected:false, group:['transaction', 'inbound'], 
        path:pathList.transaction.path, show:true, subMenu:subMenuList.transactionMenu 
      },
      { 
        menu:'report', title:'Reports', selected:false, group:['report'], 
        path:pathList.report.path, show:true, subMenu:subMenuList.reportMenu 
      },
      { 
        menu:'controlPanel', title:'Control Panel', selected:false, group:['control_panel'], 
        path:pathList.controlPanel.path, show:true, subMenu:[] 
      },
    ]
  }
}
export const appTypes = {
  APP_SELECT_MENU:'APP TYPES SET SIDEBAR STATUS',
  APP_SET_FULLSCREEN:'APP TYPES SET FULLSCREEN',
  APP_SET_TOTAL_NOTIFICATION:'APP TYPES SET TOTAL NOTIFICATION',
  TOGGLE_SIDEBAR:'APP TYPES TOGGLE SIDEBAR',
}