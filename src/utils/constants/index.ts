import { GridFilterOperators } from '@progress/kendo-react-grid'
import IAppTypes from 'pages/app.types'

const localStorageKey = {
  TOKEN: 'token',
  USER_PROFILE: 'user_profile'
}
const pathList = {
  dashboard:{ path:'/dashboard' },
  masterData:{
    path:'/master-data',
    subModule:{
      notification:'/notification',
      workOrder:'/work-order',
      reservation:'/reservation',
      unitOfMeasure:'/unit-of-measure',
      employeeClassification:'/employee-classification',
      toolsEquipment:'/tools-equipment',
      defectSource:'/defect-source',
      defectGroup:'/defect-group',
      defectPriority:'/defect-priority',
      reasonForCancelation:'/reason-for-cancelation',
      department:'/department',
      workShift:'/work-shift',
      scheduleType:'/schedule-type',
      woExecutionPriority:'/wo-execution-priority',
      executionLocation:'/execution-location',
      jobAttachmentNotes:'/job-attachment-notes',
      formBuilder:'/form-builder',
      formBuilderType:'/form-builder-type',
      library:'/library',
      libraryType:'/library-type',
    }
  },
  employee:{
    path:'/employee',
    subModule:{
      employeeProfile:'/employee-profile',
      employeeRoster:'/employee-roster',
      employeeAuth:'/employee-auth',
      employeeRole:'/employee-role',
      userDelegation:'/user-delegation',
      matrixApproval:'/matrix-approval'
    }
  },
  transaction:{
    path:'/transaction',
    subModule:{
      workOrderPos:'/work-order-pos',
      workOrderSchedule:'/work-order-schedule',
      sqcManagement:'/sqc-management',
      defectManagement:'/defect-management',
      machineDown:'/machine-down',
      timeCard:'/time-card',
      crewManagement:'/crew-management',
      downtimeStatus:'/downtime-status',
      actionTaken:'/action-taken',
      delayStatus:'/delay-status',
      oportunityStatus:'/oportunity-status',
      failureCode:'/failure-code',
      woStatus:'/wo-status',
    }
  },
  report:{
    path:'/report',
    subModule:{
      woSCHCompliance:'/wo-sch-compliance',
      plannedDuration:'/planned-duration',
      effectiveUtilization:'/effective-utilization',
      defectCompliance:'/defect-compliance',
      sqcCompliance:'/sqc-compliance',
    }
  },
  controlPanel:{ path:'/control-panel' }
}
const masterDataSubMenu:IAppTypes.ISubMenuItem[] = [
  { 
    title:'Notification', subMenuName:'notification', 
    selected:false, group:'sap', show:true, path:pathList.masterData.subModule.notification 
  },
  { 
    title:'Work Order', subMenuName:'workOrder', 
    selected:false, group:'sap', show:true, path:pathList.masterData.subModule.workOrder 
  },
  { 
    title:'Reservation', subMenuName:'reservation', 
    selected:false, group:'sap', show:true, path:pathList.masterData.subModule.reservation 
  },
  { 
    title:'Unit Of Measure', subMenuName:'unitOfMeasure', 
    selected:false, group:'sap', show:true, path:pathList.masterData.subModule.unitOfMeasure 
  },
  { 
    title:'Employee Classification', subMenuName:'employeeClassification', 
    selected:false, group:'sap', show:true, path:pathList.masterData.subModule.employeeClassification 
  },
  { 
    title:'Tools & Equipment', subMenuName:'toolsEquipment', 
    selected:false, group:'value_list', show:true, path:pathList.masterData.subModule.toolsEquipment 
  },
  { 
    title:'Defect Source', subMenuName:'defectSource', 
    selected:false, group:'value_list', show:true, path:pathList.masterData.subModule.defectSource 
  },
  { 
    title:'Defect Group', subMenuName:'defectGroup', 
    selected:false, group:'value_list', show:true, path:pathList.masterData.subModule.defectGroup 
  },
  { 
    title:'Defect Priority', subMenuName:'defectPriority', 
    selected:false, group:'value_list', show:true, path:pathList.masterData.subModule.defectPriority 
  },
  { 
    title:'Reason For Cancelation', subMenuName:'reasonForCancelation', 
    selected:false, group:'value_list', show:true, path:pathList.masterData.subModule.reasonForCancelation 
  },
  { 
    title:'Department', subMenuName:'department', 
    selected:false, group:'value_list', show:true, path:pathList.masterData.subModule.department 
  },
  { 
    title:'Work Shift', subMenuName:'workShift', 
    selected:false, group:'value_list', show:true, path:pathList.masterData.subModule.workShift 
  },
  { 
    title:'Schedule Type', subMenuName:'scheduleType', 
    selected:false, group:'value_list', show:true, path:pathList.masterData.subModule.scheduleType 
  },
  { 
    title:'WO Execution Priority', subMenuName:'woExecutionPriority', 
    selected:false, group:'value_list', show:true, path:pathList.masterData.subModule.woExecutionPriority 
  },
  { 
    title:'Execution Location', subMenuName:'executionLocation', 
    selected:false, group:'value_list', show:true, path:pathList.masterData.subModule.executionLocation 
  },
  { 
    title:'Job Attachment Notes', subMenuName:'jobAttachmentNotes', 
    selected:false, group:'value_list', show:true, path:pathList.masterData.subModule.jobAttachmentNotes
  },
  { 
    title:'Form Builder', subMenuName:'formBuilder', 
    selected:false, group:'value_list', show:true, path:pathList.masterData.subModule.formBuilder 
  },
  { 
    title:'Form Builder Type', subMenuName:'formBuilderType', 
    selected:false, group:'value_list', show:true, path:pathList.masterData.subModule.formBuilderType 
  },
  { 
    title:'Library', subMenuName:'library', 
    selected:false, group:'value_list', show:true, path:pathList.masterData.subModule.library 
  },
  { 
    title:'Library Type', subMenuName:'libraryType', 
    selected:false, group:'value_list', show:true, path:pathList.masterData.subModule.libraryType 
  }
]
const employeeSubMenu:IAppTypes.ISubMenuItem[] = [
  { 
    title:'Employee Profile', subMenuName:'employeeProfile', 
    selected:false, group:'employee', show:true, path:pathList.employee.subModule.employeeProfile 
  },
  { 
    title:'Employee Roster', subMenuName:'employeeRoster', 
    selected:false, group:'employee', show:true, path:pathList.employee.subModule.employeeRoster 
  },
  { 
    title:'Authorization', subMenuName:'employeeAuthorization', 
    selected:false, group:'employee', show:true, path:pathList.employee.subModule.employeeAuth 
  },        
  { 
    title:'Employee Role', subMenuName:'employeeRole', 
    selected:false, group:'employee', show:true, path:pathList.employee.subModule.employeeRole 
  },
  { 
    title:'User Delegation', subMenuName:'userDelegation', 
    selected:false, group:'employee', show:true, path:pathList.employee.subModule.userDelegation 
  },
  { 
    title:'Matrix Approval', subMenuName:'matrixApproval', 
    selected:false, group:'employee', show:true, path:pathList.employee.subModule.matrixApproval 
  },
]
const transactionMenu:IAppTypes.ISubMenuItem[] = [
  { 
    title:'WO Resource Management', subMenuName:'woPOS', 
    selected:false, group:'transaction', show:true, path:pathList.transaction.subModule.workOrderPos 
  },
  { 
    title:'WO Schedule Management', subMenuName:'woSchedule', 
    selected:false, group:'transaction', show:true, path:pathList.transaction.subModule.workOrderSchedule 
  },
  { 
    title:'SQC Management', subMenuName:'sqcManagement', 
    selected:false, group:'transaction', show:true, path:pathList.transaction.subModule.sqcManagement 
  },
  { 
    title:'Defect Management', subMenuName:'defectManagement', 
    selected:false, group:'transaction', show:true, path:pathList.transaction.subModule.defectManagement 
  },
  { 
    title:'Machine Down', subMenuName:'machineDown', 
    selected:false, group:'transaction', show:true, path:pathList.transaction.subModule.machineDown 
  },
  { 
    title:'Time Card', subMenuName:'timeCard', 
    selected:false, group:'transaction', show:true, path:pathList.transaction.subModule.timeCard 
  },
  { 
    title:'Crew Management', subMenuName:'crewManagement', 
    selected:false, group:'transaction', show:true, path:pathList.transaction.subModule.crewManagement 
  },
  { 
    title:'Downtime Status', subMenuName:'downtimeStatus', 
    selected:false, group:'inbound', show:true, path:pathList.transaction.subModule.downtimeStatus 
  },
  { 
    title:'Action Taken Status', subMenuName:'actionTakenStatus', 
    selected:false, group:'inbound', show:true, path:pathList.transaction.subModule.actionTaken 
  },
  { 
    title:'Delay Status', subMenuName:'delayStatus', 
    selected:false, group:'inbound', show:true, path:pathList.transaction.subModule.delayStatus 
  },
  { 
    title:'Oportunity Status', subMenuName:'oportunityStatus', 
    selected:false, group:'inbound', show:true, path:pathList.transaction.subModule.oportunityStatus 
  },
  { 
    title:'Failure Code Status', subMenuName:'failureCodeStatus', 
    selected:false, group:'inbound', show:true, path:pathList.transaction.subModule.failureCode 
  },
  { 
    title:'WO Status', subMenuName:'woStatus', 
    selected:false, group:'inbound', show:true, path:pathList.transaction.subModule.woStatus 
  },
]
const reportMenu:IAppTypes.ISubMenuItem[] = [
  { 
    title:'WO Schedule Compliance', subMenuName:'woSCHCompliance', 
    selected:false, group:'report', show:true, path:pathList.report.subModule.woSCHCompliance 
  },
  { 
    title:'Planned Duration Effect.', subMenuName:'plannedDuration', 
    selected:false, group:'report', show:true, path:pathList.report.subModule.plannedDuration 
  },
  { 
    title:'Effective Utilization', subMenuName:'effectiveUtilization', 
    selected:false, group:'report', show:true, path:pathList.report.subModule.effectiveUtilization 
  },
  { 
    title:'Defect Compliance', subMenuName:'defectCompliance', 
    selected:false, group:'report', show:true, path:pathList.report.subModule.defectCompliance 
  },
  { 
    title:'SQC Compliance', subMenuName:'sqcCompliance', 
    selected:false, group:'report', show:true, path:pathList.report.subModule.sqcCompliance
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
  height:`calc(100vh - ${navbarStyle.height} - 200px)`
}
const formatGridDate = {
  ddMMYYYY:'{0:dd-MM-yyyy}',
  hhMM:'{0:HH:mm}'
}
const filterOperator = {
  contains:'contains',
  notContains:'doesnotcontain',
  startWith:'startswith',
  endWith:'endswith',
  eq:'eq',
  neq:'neq',
  gt:'gt',
  lt:'lt',
  gte:'gte',
  lte:'lte',
}
const customFilterOperator:GridFilterOperators = {
  'text': [
    { text: 'grid.filterContainsOperator', operator: filterOperator.contains },
    { text: 'grid.filterNotContainsOperator', operator: filterOperator.notContains },
    { text: 'grid.filterStartsWithOperator', operator: filterOperator.startWith },
    { text: 'grid.filterEndsWithOperator', operator: filterOperator.endWith }
  ],
  'numeric': [
    { text: 'grid.filterEqOperator', operator: filterOperator.eq },
    { text: 'grid.filterNotEqOperator', operator: filterOperator.neq },
    { text: 'grid.filterGteOperator', operator: filterOperator.gte },
    { text: 'grid.filterGtOperator', operator: filterOperator.gt },
    { text: 'grid.filterLteOperator', operator: filterOperator.lte },
    { text: 'grid.filterLtOperator', operator: filterOperator.lt }
  ],
  'date': [
    { text: 'grid.filterEqOperator', operator: filterOperator.eq },
    { text: 'grid.filterNotEqOperator', operator: filterOperator.neq },
    { text: 'grid.filterAfterOrEqualOperator', operator: filterOperator.gte },
    { text: 'grid.filterAfterOperator', operator: filterOperator.gt },
    { text: 'grid.filterBeforeOperator', operator: filterOperator.lt },
    { text: 'grid.filterBeforeOrEqualOperator', operator: filterOperator.lte }
  ],
  'boolean': [
    { text: 'grid.filterEqOperator', operator: 'eq' }
  ]
}
export {
  localStorageKey,
  subMenuList,
  sidebarStyle,
  navbarStyle,
  gridStyle,
  formatGridDate,
  fixedZIndex,
  pathList,
  customFilterOperator,
  filterOperator
}