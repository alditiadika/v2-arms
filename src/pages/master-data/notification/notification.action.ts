import INotificationTypes, { notificationLoadingRow, notificationTypes } from './notification.types'
import notificationService from 'services/notification'
import { errorResponse } from 'utils/error-response'
import dateReturn from 'utils/date-return'
import isAnyloader from 'utils/is-any-loader-cell'
import { filterGeneratorQuery, sortGeneratorQuery } from 'utils/generate-query'

const requestDataIfNeeded:
INotificationTypes.INotificationRequestIfNeeded = async ({ client, oldDataGrid, dataStates }) => {
  const {
    isAnyLoading, loadingStartIndex
  } = isAnyloader({ allData:oldDataGrid, skipStartCheck:dataStates.skip, takeData:dataStates.take })
  if(isAnyLoading) {
    const filterString = filterGeneratorQuery(dataStates.filter)
    const sortString = sortGeneratorQuery(dataStates.sort)
    const response:INotificationTypes.TResponseType = await client.query({
      query:notificationService.getNotificationByDataState(filterString, sortString),
      fetchPolicy:'no-cache',
      variables:{
        skip:loadingStartIndex,
        first:dataStates.take
      }
    })
    const dataGridResponse = response.data.sap_notification_headers.map((item, idx) => ({
      ...item,
      index:idx,
      isLoadingItem:false,
      start_of_malfunction_date:dateReturn(item.start_of_malfunction_date),
      end_of_malfunction_date:dateReturn(item.end_of_malfunction_date),
      start_of_malfunction_time:dateReturn(item.start_of_malfunction_time),
      end_of_malfunction_time:dateReturn(item.end_of_malfunction_time),
      sap_created_on:dateReturn(item.sap_created_on),
      sap_modified_on:dateReturn(item.sap_modified_on)
    }))
    const newData = oldDataGrid.map((item, index) => {
      if(item.isLoadingItem) {
        if(dataGridResponse[index - loadingStartIndex]) {
          const itemReturn = dataGridResponse[index - loadingStartIndex]
          return { ...itemReturn, index }
        }
      }
      return item
    })
    return { dataGrid:newData, isDataRequest:true }
  }
  return {
    isDataRequest:false,
    dataGrid:oldDataGrid
  }
}
const notificationGetDataFirstLoading:
INotificationTypes.INotificationGetData = ({ client, dataStates }) => async dispatch => {
  try {
    const filterString = filterGeneratorQuery(dataStates.filter)
    const sortString = sortGeneratorQuery(dataStates.sort)
    dispatch({ type: notificationTypes.SET_LOADING, payload:true })
    const countResponse:INotificationTypes.TResponseCountType = await client.query({
      query:notificationService.countNotificationByDataState(filterString, sortString),
      fetchPolicy:'no-cache',
      variables:{
        skip:0,
        take:dataStates.take
      }
    })
    const count = countResponse.data.sap_notification_headersConnection.aggregate.count
    const response:INotificationTypes.TResponseType = await client.query({
      query:notificationService.getNotificationByDataState(filterString, sortString),
      fetchPolicy:'no-cache',
      variables:{
        skip:0,
        first:dataStates.take
      }
    })
    const dataGridResponse = response.data.sap_notification_headers.map((item, idx) => ({
      ...item,
      index:idx + 1,
      isLoadingItem:false,
      start_of_malfunction_date:dateReturn(item.start_of_malfunction_date),
      end_of_malfunction_date:dateReturn(item.end_of_malfunction_date),
      start_of_malfunction_time:dateReturn(item.start_of_malfunction_time),
      end_of_malfunction_time:dateReturn(item.end_of_malfunction_time),
      sap_created_on:dateReturn(item.sap_created_on),
      sap_modified_on:dateReturn(item.sap_modified_on)
    }))
    const dataGrid = new Array(count).fill(0).map((_, idx) => {
      const no = idx+1
      if(dataGridResponse[idx]) {
        const item:INotificationTypes.INotificationGrid = dataGridResponse[idx]
        return { ...item, index:no }
      }
      return { ...notificationLoadingRow, index:no }
    })
    const payload:INotificationTypes.IGetNotificationValue = { dataGrid, count }
    dispatch({ type: notificationTypes.SET_DATA_GRID, payload })
  } catch(e) {
    const {
      errorCode,
      errorMessage,
      isError
    } = errorResponse(e)
    const payload:INotificationTypes.ISetErrorPayload = {
      errorCode,
      errorMessage,
      isError
    }
    dispatch({ type:notificationTypes.SET_ERROR, payload })
  }
}
const onPageChange:
INotificationTypes.INotificationPageChange = ({ event, client, dataStates, oldDataGrid }) => async dispatch => {
  dispatch({ type:notificationTypes.PAGE_CHANGE, payload:event.page.skip })
  const newDataStates = {
    ...dataStates, skip:event.page.skip
  }
  try {
    const { dataGrid, isDataRequest } = await requestDataIfNeeded({ 
      client, oldDataGrid, dataStates:newDataStates 
    })
    if(isDataRequest) {
      const payload:INotificationTypes.IGetNotificationValue = { dataGrid, count:dataStates.total }
      dispatch({ type: notificationTypes.SET_DATA_GRID, payload })
    }
  } catch(e) {
    const {
      errorCode,
      errorMessage,
      isError
    } = errorResponse(e)
    const payload:INotificationTypes.ISetErrorPayload = {
      errorCode,
      errorMessage,
      isError
    }
    dispatch({ type:notificationTypes.SET_ERROR, payload })
  }
}
const onDataStateChange:
INotificationTypes.INotificationDataStateChange = ({ dataState }) => dispatch => {
  dispatch({ type:notificationTypes.DATA_STATE_CHANGE, payload:dataState })
}
const setError:INotificationTypes.INotificationSetError = (payload) => dispatch => {
  dispatch({ type:notificationTypes.SET_ERROR, payload })
}
const onClickFilter:INotificationTypes.INotificationOnClickFilter = () => dispatch => {
  dispatch({ type:notificationTypes.ON_CLICK_FILTER, payload:null })
}
export default {
  notificationGetDataFirstLoading,
  onPageChange,
  onDataStateChange,
  setError,
  onClickFilter
}