import { ApolloClient } from '@apollo/client'
import { 
  GridDataStateChangeEvent, 
  GridPageChangeEvent 
} from '@progress/kendo-react-grid'
import customHeaderCell from 'components/atoms/custom-header-cell'
import { formatGridDate } from 'utils/constants'
import IGlobalTypes from 'utils/global-types'

declare namespace INotificationTypes {
  interface INotificationGrid {
    index:number
    isLoadingItem:boolean,
    id:number
    maintenance_plant:string
    location:string
    funloc:string
    desc_of_funloc:string | null
    notification:string
    order:string
    short_text:string | null
    notification_type:string | null
    planning_indicator:string | null
    system_status:string | null
    user_status:string | null
    priority:string | null
    planner_group:string | null
    pm_activity_type:string | null
    reported_by:string | null
    person_responsible:string | null
    name_of_person_responsible:string | null
    breakdown_indicator:string | null
    start_of_malfunction_date:Date | string | null
    start_of_malfunction_time:Date |string | null
    end_of_malfunction_date:Date |string | null
    end_of_malfunction_time:Date |string | null
    breakdown_duration:number | null
    notification_item_short_text:string | null
    cause_text:string | null
    code_group_object_part:string | null
    part_of_object:string | null
    short_text_object:string | null
    code_group_problem:string | null
    problem:string | null
    short_text_for_problem:string | null
    code_group_cause:string | null
    cause_code:string | null
    short_text_for_cause_code:string | null
    sap_created_by:string | null
    sap_created_on:Date |string | null
    sap_modified_by:string | null
    sap_modified_on:Date |string | null
  }
  type TParam = { 
    client: ApolloClient<object>, 
    oldDataGrid:INotificationGrid[],
    dataStates: IGlobalTypes.ICustomDataStates
  }
  interface INotificationState extends IGlobalTypes.IGlobalInitialState {
    dataGrid:INotificationGrid[]
    dataStates:IGlobalTypes.ICustomDataStates
  }
  interface ISetErrorPayload {
    isError: boolean
    errorMessage: string
    errorCode: number | string
  }
  type IGetNotificationPayload = {
    client:ApolloClient<object>
    dataStates:IGlobalTypes.ICustomDataStates
  }
  type IGetNotificationValue = {
    dataGrid:INotificationGrid[],
    count:number
  }
  type TOnPageChange = {
    event:GridPageChangeEvent,
    client:ApolloClient<object>,
    dataStates:IGlobalTypes.ICustomDataStates,
    oldDataGrid:INotificationGrid[]
  }
  type TResponseType = IGlobalTypes.IGraphqlResponse<
    'view', 'sap_notification_headers', INotificationTypes.INotificationGrid[]
    >
  
  type TResponseCountType = IGlobalTypes.IGraphqlResponse<'count', 'sap_notification_headers'>
  type INotificationGetData = IGlobalTypes.IAction<IGetNotificationPayload>
  type INotificationSetError = IGlobalTypes.IAction<ISetErrorPayload>
  type INotificationActionSetLoading = IGlobalTypes.IAction<boolean>
  type INotificationPageChange =  IGlobalTypes.IAction<TOnPageChange>
  type INotificationDataStateChange = IGlobalTypes.IAction<GridDataStateChangeEvent>
  type INotificationOnClickFilter = IGlobalTypes.IAction<void>
  type INotificationRequestIfNeeded = (t:TParam) => Promise<{
    isDataRequest:boolean,
    dataGrid:INotificationGrid[]
  }>
}
export default INotificationTypes
export const notificationTypes = {
  GET_NOTIFICATION:'NOTIFICATION TYPES REDUCER GET NOTIFICATION',
  SET_ERROR:'NOTIFICATION TYPES REDUCER SET ERROR',
  SET_LOADING:'NOTIFICATION TYPES REDUCER SET LOADING',
  SET_DATA_GRID:'NOTIFICATION TYPES REDUCER SET DATA GRID',
  PAGE_CHANGE:'NOTIFICATION TYPES REDUCER PAGE CHANGE',
  DATA_STATE_CHANGE:'NOTIFICATION TYPES REDUCER DATA STATE CHANGE',
  ON_CLICK_FILTER:'NOTIFICATION TYPES REDUCER ON CLICK FILTER'
}
export const notificationColumnProps:IGlobalTypes.ICustomColumn[] = [
  {
    show:true,
    field:'index',
    title:'No',
    width:'70px',
    filterable:false
  },
  {
    show:true,
    field:'maintenance_plant',
    title:'Plant',
    width:'120px'
  },
  {
    show:true,
    field:'location',
    title:'Location',
    width:'120px'
  },
  {
    show:true,
    field:'funloc',
    title:'Funloc',
    width:'120px'
  },
  {
    show:true,
    field:'desc_of_funloc',
    title:'Desc of Funloc',
    width:'250px'
  },
  {
    show:true,
    field:'notification',
    title:'Notification',
    width:'150px'
  },
  {
    show:true,
    field:'order',
    title:'Order',
    width:'150px'
  },
  {
    show:true,
    field:'short_text',
    title:'Desc of Notification',
    width:'300px'
  },
  {
    show:true,
    field:'notification_type',
    title:'Type',
    width:'100px'
  },
  {
    show:true,
    field:'planning_indicator',
    title:'NPI',
    width:'80px'
  },
  {
    show:true,
    field:'system_status',
    title:'System Status',
    width:'200px'
  },
  {
    show:true,
    field:'user_status',
    title:'User Status',
    width:'130px'
  },
  {
    show:true,
    field:'priority',
    title:'Priority',
    width:'100px'
  },
  {
    show:true,
    field:'planner_group',
    title:'Planner Group',
    width:'140px'
  },
  {
    show:true,
    field:'pm_activity_type',
    title:'PM Act. Type',
    width:'140px'
  },
  {
    show:true,
    field:'reported_by',
    title:'Reported By',
    width:'150px'
  },
  {
    show:true,
    field:'person_responsible',
    headerCell:customHeaderCell('Person,Responsible'),
    width:'130px'
  },
  {
    show:true,
    field:'name_of_person_responsible',
    headerCell:customHeaderCell('Name of,Person Responsible'),
    width:'160px'
  },
  {
    show:true,
    field:'breakdown_indicator',
    headerCell:customHeaderCell('Breakdown,Indicator'),
    width:'120px'
  },
  {
    show:true,
    field:'start_of_malfunction_date',
    title:'Malf. Start Date',
    width:'150px',
    format:formatGridDate.ddMMYYYY,
    filter:'date'
  },
  {
    show:true,
    field:'start_of_malfunction_time',
    headerCell:customHeaderCell('Malf.,Start time'),
    width:'120px',
    format:formatGridDate.hhMM,
    filterable:false
  },
  {
    show:true,
    field:'end_of_malfunction_date',
    title:'Malf. End Date',
    width:'150px',
    format:formatGridDate.ddMMYYYY,
    filter:'date'
  },
  {
    show:true,
    field:'end_of_malfunction_time',
    headerCell:customHeaderCell('Malf.,End time'),
    width:'120px',
    format:formatGridDate.hhMM,
    filterable:false
  }, 
  {
    show:true,
    field:'breakdown_duration',
    headerCell:customHeaderCell('Breakdown,Duration'),
    width:'120px'
  }, 
  {
    show:true,
    field:'notification_item_short_text',
    headerCell:customHeaderCell('Damage,Text'),
    width:'120px'
  }, 
  {
    show:true,
    field:'cause_text',
    title:'Cause Text',
    width:'120px'
  },
  {
    show:true,
    field:'code_group_object_part',
    headerCell:customHeaderCell('Code Group,Object Part'),
    width:'120px'
  }, 
  {
    show:true,
    field:'part_of_object',
    headerCell:customHeaderCell('Part of,Object'),
    width:'120px'
  }, 
  {
    show:true,
    field:'short_text_object',
    title:'Short Text Object',
    width:'250px'
  }, 
  {
    show:true,
    field:'code_group_problem',
    headerCell:customHeaderCell('Code Group,Problem'),
    width:'120px'
  }, 
  {
    show:true,
    field:'problem',
    headerCell:customHeaderCell('Damage,Code'),
    width:'120px'
  }, 
  {
    show:true,
    field:'short_text_for_problem',
    title:'Short Text Problem',
    width:'220px'
  }, 
  {
    show:true,
    field:'code_group_cause',
    headerCell:customHeaderCell('Code Group,Cause'),
    width:'120px'
  }, 
  {
    show:true,
    field:'cause_code',
    title:'Cause Code',
    width:'140px'
  }, 
  {
    show:true,
    field:'short_text_for_cause_code',
    title:'Sort Text for Cause Code',
    width:'200px'
  }, 
  {
    show:true,
    field:'sap_created_by',
    title:'Created By',
    width:'120px'
  }, 
  {
    show:true,
    field:'sap_created_on',
    title:'Created On',
    width:'180px',
    format:formatGridDate.ddMMYYYY,
    filter:'date'
  },
  {
    show:true,
    field:'sap_modified_by',
    title:'Modified By',
    width:'180px'
  },
  {
    show:true,
    field:'sap_modified_on',
    title:'Modified On',
    width:'180px',
    format:formatGridDate.ddMMYYYY,
    filter:'date'
  }
]
export const notificationLoadingRow:INotificationTypes.INotificationGrid = {
  index:0,
  id:0,
  isLoadingItem:true,
  maintenance_plant:'',
  location:'',
  funloc:'',
  desc_of_funloc:null,
  notification:'',
  order:'',
  short_text:null,
  notification_type:null,
  planning_indicator:null,
  system_status:null,
  user_status:null,
  priority:null,
  planner_group:null,
  pm_activity_type:null,
  reported_by:null,
  person_responsible:null,
  name_of_person_responsible:null,
  breakdown_indicator:null,
  start_of_malfunction_date:null,
  start_of_malfunction_time:null,
  end_of_malfunction_date:null,
  end_of_malfunction_time:null,
  breakdown_duration:null,
  notification_item_short_text:null,
  cause_text:null,
  code_group_object_part:null,
  part_of_object:null,
  short_text_object:null,
  code_group_problem:null,
  problem:null,
  short_text_for_problem:null,
  code_group_cause:null,
  cause_code:null,
  short_text_for_cause_code:null,
  sap_created_by:null,
  sap_created_on:null,
  sap_modified_by:null,
  sap_modified_on:null
}