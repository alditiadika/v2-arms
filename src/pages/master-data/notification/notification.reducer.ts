import { State as KendoDataState } from '@progress/kendo-data-query'
import IGlobalTypes from 'utils/global-types'
import INotificationTypes, { notificationTypes } from './notification.types'

const initialState:INotificationTypes.INotificationState = {
  isLoading:true,
  isError:false,
  errorCode:0,
  errorMessage:'',
  dataGrid:[],
  dataStates:{
    filterable:false,
    reorderable:true,
    scrollable:'virtual',
    skip:0,
    take:25,
    total:0,
    sortable:true,

  }
}
const notificationReducer:
IGlobalTypes.IReducer<INotificationTypes.INotificationState> = (state = initialState, action) => {
  switch (action.type) {
  case notificationTypes.SET_DATA_GRID:{
    const {
      dataGrid, count
    }: INotificationTypes.IGetNotificationValue = action.payload
    return {
      ...state,
      isLoading:false,
      isError:false,
      errorCode:0,
      errorMessage:'',
      dataGrid,
      dataStates:{
        ...state.dataStates,
        total:count
      }
    }
  }
  case notificationTypes.PAGE_CHANGE:{
    const skip:number = action.payload
    return {
      ...state,
      dataStates:{
        ...state.dataStates,
        skip
      }
    }
  }
  case notificationTypes.DATA_STATE_CHANGE:{
    const { filter, sort }:KendoDataState = action.payload
    return {
      ...state,
      isLoading:true,
      dataStates:{
        ...state.dataStates,
        filter, sort
      }
    }
  }
  case notificationTypes.SET_ERROR:{
    const { errorCode, errorMessage, isError }:INotificationTypes.ISetErrorPayload = action.payload
    return {
      ...state,
      isError,
      errorCode,
      errorMessage,
      isLoading:false
    }
  }
  case notificationTypes.ON_CLICK_FILTER:{
    return {
      ...state,
      dataStates:{
        ...state.dataStates,
        filterable:!state.dataStates.filterable
      }
    }
  }
  default:
    return state
  }
}
export default notificationReducer