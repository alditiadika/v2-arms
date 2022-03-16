import IAppTypes from 'pages/app.types'

const localStorageKey = {
  TOKEN: 'token',
  USER_PROFILE: 'user_profile'
}

const masterDataSubMenu:IAppTypes.ISubMenuItem[] = [
  { 
    title:'Notification', subMenuName:'notification', 
    selected:false, group:'sap', show:true, path:'/notification' 
  },
  { 
    title:'Work Order', subMenuName:'workOrder', 
    selected:false, group:'sap', show:true, path:'/work-order' 
  },
  { 
    title:'Reservation', subMenuName:'reservation', 
    selected:false, group:'sap', show:true, path:'/reservation' 
  },
  { 
    title:'Unit Of Measure', subMenuName:'unitOfMeasure', 
    selected:false, group:'sap', show:true, path:'/unit-of-measure' 
  },
  { 
    title:'Employee Classification', subMenuName:'employeeClassification', 
    selected:false, group:'sap', show:true, path:'/employee-classification' 
  },
  { 
    title:'Tools & Equipment', subMenuName:'toolsEquipment', 
    selected:false, group:'value_list', show:true, path:'/tools-equipment' 
  },
  { 
    title:'Defect Source', subMenuName:'defectSource', 
    selected:false, group:'value_list', show:true, path:'/defect-source' 
  },
  { 
    title:'Defect Group', subMenuName:'defectGroup', 
    selected:false, group:'value_list', show:true, path:'/defect-group' 
  },
  { 
    title:'Defect Priority', subMenuName:'defectPriority', 
    selected:false, group:'value_list', show:true, path:'/defect-priority' 
  },
  { 
    title:'Reason For Cancelation', subMenuName:'reasonForCancelation', 
    selected:false, group:'value_list', show:true, path:'/reason-for-cancelation' 
  },
  { 
    title:'Department', subMenuName:'department', 
    selected:false, group:'value_list', show:true, path:'/department' 
  },
  { 
    title:'Work Shift', subMenuName:'workShift', 
    selected:false, group:'value_list', show:true, path:'/work-shift' 
  },
  { 
    title:'Schedule Type', subMenuName:'scheduleType', 
    selected:false, group:'value_list', show:true, path:'/schedule-type' 
  },
  { 
    title:'WO Execution Priority', subMenuName:'woExecutionPriority', 
    selected:false, group:'value_list', show:true, path:'/wo-execution-priority' 
  },
  { 
    title:'Execution Location', subMenuName:'executionLocation', 
    selected:false, group:'value_list', show:true, path:'/execution-location' 
  },
  { 
    title:'Job Attachment Notes', subMenuName:'jobAttachmentNotes', 
    selected:false, group:'value_list', show:true, path:'/job-attachment-notes'
  },
  { 
    title:'Form Builder', subMenuName:'formBuilder', 
    selected:false, group:'value_list', show:true, path:'/form-builder' 
  },
  { 
    title:'Form Builder Type', subMenuName:'formBuilderType', 
    selected:false, group:'value_list', show:true, path:'/form-builder-type' 
  },
  { 
    title:'Library', subMenuName:'library', 
    selected:false, group:'value_list', show:true, path:'/library' 
  },
  { 
    title:'Library Type', subMenuName:'libraryType', 
    selected:false, group:'value_list', show:true, path:'/library-type' }
]
const employeeSubMenu:IAppTypes.ISubMenuItem[] = [
  { 
    title:'Employee Profile', subMenuName:'employeeProfile', 
    selected:false, group:'employee', show:true, path:'/employee-profile' 
  },
  { 
    title:'Employee Roster', subMenuName:'employeeRoster', 
    selected:false, group:'employee', show:true, path:'/employee-roster' 
  },
  { 
    title:'Authorization', subMenuName:'employeeAuthorization', 
    selected:false, group:'employee', show:true, path:'/employee-auth' 
  },        
  { 
    title:'Employee Role', subMenuName:'employeeRole', 
    selected:false, group:'employee', show:true, path:'/employee-role' 
  },
  { 
    title:'User Delegation', subMenuName:'userDelegation', 
    selected:false, group:'employee', show:true, path:'/user-delegation' 
  },
  { 
    title:'Matrix Approval', subMenuName:'matrixApproval', 
    selected:false, group:'employee', show:true, path:'/matrix-approval' 
  },
]
const transactionMenu:IAppTypes.ISubMenuItem[] = [
  { 
    title:'WO Resource Management', subMenuName:'woPOS', 
    selected:false, group:'transaction', show:true, path:'/work-order-pos' 
  },
  { 
    title:'WO Schedule Management', subMenuName:'woSchedule', 
    selected:false, group:'transaction', show:true, path:'/work-order-schedule' 
  },
  { 
    title:'SQC Management', subMenuName:'sqcManagement', 
    selected:false, group:'transaction', show:true, path:'/sqc-management' 
  },
  { 
    title:'Defect Management', subMenuName:'defectManagement', 
    selected:false, group:'transaction', show:true, path:'/defect-management' 
  },
  { 
    title:'Machine Down', subMenuName:'machineDown', 
    selected:false, group:'transaction', show:true, path:'/machine-down' 
  },
  { 
    title:'Time Card', subMenuName:'timeCard', 
    selected:false, group:'transaction', show:true, path:'/timecard' 
  },
  { 
    title:'Crew Management', subMenuName:'crewManagement', 
    selected:false, group:'transaction', show:true, path:'/crew-management' 
  },
  { 
    title:'Downtime Status', subMenuName:'downtimeStatus', 
    selected:false, group:'inbound', show:true, path:'/downtime-status' 
  },
  { 
    title:'Action Taken Status', subMenuName:'actionTakenStatus', 
    selected:false, group:'inbound', show:true, path:'/action-taken' 
  },
  { 
    title:'Delay Status', subMenuName:'delayStatus', 
    selected:false, group:'inbound', show:true, path:'/delay-status' 
  },
  { 
    title:'Oportunity Status', subMenuName:'oportunityStatus', 
    selected:false, group:'inbound', show:true, path:'/oportunity-status' 
  },
  { 
    title:'Failure Code Status', subMenuName:'failureCodeStatus', 
    selected:false, group:'inbound', show:true, path:'/failure-code' 
  },
  { 
    title:'WO Status', subMenuName:'woStatus', 
    selected:false, group:'inbound', show:true, path:'/wo-status' 
  },
]
const reportMenu:IAppTypes.ISubMenuItem[] = [
  { 
    title:'WO Schedule Compliance', subMenuName:'woSCHCompliance', 
    selected:false, group:'report', show:true, path:'/wo-sch-compliance' 
  },
  { 
    title:'Planned Duration Effect.', subMenuName:'plannedDuration', 
    selected:false, group:'report', show:true, path:'/planned-duration' 
  },
  { 
    title:'Effective Utilization', subMenuName:'effectiveUtilization', 
    selected:false, group:'report', show:true, path:'/effective-utilization' 
  },
  { 
    title:'Defect Compliance', subMenuName:'defectCompliance', 
    selected:false, group:'report', show:true, path:'/defect-compliance' 
  },
  { 
    title:'SQC Compliance', subMenuName:'sqcCompliance', 
    selected:false, group:'report', show:true, path:'/sqc-compliance' 
  },
]
const subMenuList = {
  masterDataSubMenu,
  employeeSubMenu,
  transactionMenu,
  reportMenu
}
const navbarStyle = {
  width:'100vw',
  height:'60px'
}
const sidebarStyle = {
  menuWidth:'80px',
  menuHeight:`calc(100vh - ${navbarStyle.height})`,
  subMenuWidth:'250px'
}
const fixedZIndex = {
  modal:99999,
  navbar:99998,
  sidebar:99997
}
const gridStyle = {
  height:`calc(100vh - ${navbarStyle.height} - 190px)`
}
const formatGridDate = {
  ddMMYYYY:'{0:dd-MM-yyyy}',
  hhMM:'{0:HH:mm}'
}
export {
  localStorageKey,
  subMenuList,
  sidebarStyle,
  navbarStyle,
  gridStyle,
  formatGridDate,
  fixedZIndex
}