import { SvgIconTypeMap } from '@mui/material'
import { OverridableComponent } from '@mui/material/OverridableComponent'
import {
  Dashboard,
  NotificationsNoneOutlined as Notification,
  ListOutlined as WorkOrder,
  DateRangeOutlined as Reservation,
  TuneOutlined as UnitOfMeasure,
  AssignmentTurnedInOutlined as EmployeeClassification,
  ConstructionOutlined as ToolsEquipment,
  SearchOutlined as DefectMaster,
  CancelOutlined as ReasonCancelation,
  FlagOutlined as Department,
  AccessTimeOutlined as WorkShift,
  EventOutlined as ScheduleMaster,
  LowPriorityOutlined as WOExecutionPriority,
  WorkOutlineOutlined as JobAttachment,
  FormatLineSpacingOutlined as FormBuilder,
  LibraryBooksOutlined as Library,
  ManageAccountsOutlined as EmployeeProfile,
  BadgeOutlined as EmployeeRoster,
  SecurityOutlined as EmployeeAuth,
  AccountTreeOutlined as EmployeeRole,
  GroupOutlined as UserDelegation,
  AdminPanelSettingsOutlined as MatrixApproval,
  ManageSearchOutlined as WOResource,
  ContactMailOutlined as SQC,
  EngineeringOutlined as MachineDown,
  AvTimerOutlined as Timecard,
  GroupsOutlined as CrewManagement,
  SettingsApplicationsOutlined as SAPStatus,
  AssessmentOutlined as Report
} from '@mui/icons-material'
import IAppTypes from 'pages/app.types'

type TFunc = (menu:IAppTypes.TSubMenu) => OverridableComponent<SvgIconTypeMap> & { muiName: string }

const generateIconSubMenu:TFunc = (menu) => {
  switch(menu) {
  //Master Data
  case 'notification':
    return Notification
  case 'workOrder':
    return WorkOrder
  case 'reservation':
    return Reservation
  case 'unitOfMeasure':
    return UnitOfMeasure
  case 'employeeClassification':
    return EmployeeClassification
  case 'toolsEquipment':
    return ToolsEquipment
  case 'defectSource':
    return DefectMaster
  case 'defectGroup':
    return DefectMaster
  case 'defectPriority':
    return DefectMaster
  case 'reasonForCancelation':
    return ReasonCancelation
  case 'department':
    return Department
  case 'workShift':
    return WorkShift
  case 'scheduleType':
    return ScheduleMaster
  case 'woExecutionPriority':
    return WOExecutionPriority
  case 'executionLocation':
    return WOExecutionPriority
  case 'jobAttachmentNotes':
    return JobAttachment
  case 'formBuilder':
    return FormBuilder
  case 'formBuilderType':
    return FormBuilder
  case 'library':
    return Library
  case 'libraryType':
    return Library

    //Employee
  case 'employeeProfile':
    return EmployeeProfile
  case 'employeeRoster':
    return EmployeeRoster
  case 'employeeAuthorization':
    return EmployeeAuth
  case 'employeeRole':
    return EmployeeRole
  case 'userDelegation':
    return UserDelegation
  case 'matrixApproval':
    return MatrixApproval

    //transaction
  case 'woPOS':
    return WOResource
  case 'woSchedule':
    return ScheduleMaster
  case 'sqcManagement':
    return SQC
  case 'defectManagement':
    return DefectMaster
  case 'machineDown':
    return MachineDown
  case 'timeCard':
    return Timecard
  case 'crewManagement':
    return CrewManagement
  case 'downtimeStatus':
    return SAPStatus
  case 'actionTakenStatus':
    return SAPStatus
  case 'delayStatus':
    return SAPStatus
  case 'oportunityStatus':
    return SAPStatus
  case 'failureCodeStatus':
    return SAPStatus
  case 'woStatus':
    return SAPStatus
    
    //report
  case 'woSCHCompliance':
    return Report
  case 'plannedDuration':
    return Report
  case 'effectiveUtilization':
    return Report
  case 'defectCompliance':
    return Report
  case 'sqcCompliance':
    return Report

  default:
    return Dashboard
  }
}
export default generateIconSubMenu