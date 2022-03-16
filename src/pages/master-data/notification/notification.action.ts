import INotificationTypes, { notificationLoadingRow, notificationTypes } from './notification.types'
import notificationService from 'services/notification'
import { errorResponse } from 'utils/error-response'
import dateReturn from 'utils/date-return'
import isAnyloader from 'utils/is-any-loader-cell'

const requestDataIfNeeded:
INotificationTypes.INotificationRequestIfNeeded = async ({ client, oldDataGrid, dataStates }) => {
  const {
    isAnyLoading, loadingStartIndex
  } = isAnyloader({ allData:oldDataGrid, skipStartCheck:dataStates.skip, takeData:dataStates.take })
  if(isAnyLoading) {
    const response:INotificationTypes.TResponseType = await client.query({
      query:notificationService.GET_NOTIFICATION,
      fetchPolicy:'no-cache',
      variables:{
        skip:loadingStartIndex,
        first:dataStates.take
      }
    })
    const dataGridResponse = response.data.sap_notification_headers
    return oldDataGrid.map((item, index) => {
      if(item.isLoadingItem) {
        if(dataGridResponse[index - loadingStartIndex]) {
          const itemReturn = dataGridResponse[index - loadingStartIndex]
          const dataReturn = {
            ...itemReturn,
            index,
            isLoadingItem:false,
            start_of_malfunction_date:dateReturn(item.start_of_malfunction_date),
            end_of_malfunction_date:dateReturn(item.end_of_malfunction_date),
            start_of_malfunction_time:dateReturn(item.start_of_malfunction_time),
            end_of_malfunction_time:dateReturn(item.end_of_malfunction_time),
            sap_created_on:dateReturn(item.sap_created_on),
            sap_modified_on:dateReturn(item.sap_modified_on)
          }
          return dataReturn
        }
      }
      return item
    })
  }
  return oldDataGrid
}
const notificationGetDataFirstLoading:
INotificationTypes.INotificationGetData = ({ client, dataStates }) => async dispatch => {
  try {
    dispatch({ type: notificationTypes.SET_LOADING, payload:true })
    const countResponse:INotificationTypes.TResponseCountType = await client.query({
      query:notificationService.COUNT_NOTIFICATION,
      fetchPolicy:'no-cache',
      variables:{
        skip:dataStates.skip,
        take:dataStates.take
      }
    })
    const count = countResponse.data.sap_notification_headersConnection.aggregate.count
    const response:INotificationTypes.TResponseType = await client.query({
      query:notificationService.GET_NOTIFICATION,
      fetchPolicy:'no-cache',
      variables:{
        skip:dataStates.skip,
        first:dataStates.take
      }
    })
    const dataGridResponse = response.data.sap_notification_headers
    const dataGrid = new Array(count).fill(0).map((_, idx) => {
      const no = idx+1
      if(no <= dataGridResponse.length) {
        const item:INotificationTypes.INotificationGrid = dataGridResponse[idx]
        return {
          ...item,
          index:idx + 1,
          isLoadingItem:false,
          start_of_malfunction_date:dateReturn(item.start_of_malfunction_date),
          end_of_malfunction_date:dateReturn(item.end_of_malfunction_date),
          start_of_malfunction_time:dateReturn(item.start_of_malfunction_time),
          end_of_malfunction_time:dateReturn(item.end_of_malfunction_time),
          sap_created_on:dateReturn(item.sap_created_on),
          sap_modified_on:dateReturn(item.sap_modified_on)
        }
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
    const dataGrid = await requestDataIfNeeded({ client, oldDataGrid, dataStates:newDataStates })
    const payload:INotificationTypes.IGetNotificationValue = { dataGrid, count:dataStates.total }
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
const setError:INotificationTypes.INotificationSetError = (payload) => dispatch => {
  dispatch({ type:notificationTypes.SET_ERROR, payload })
}
export default {
  notificationGetDataFirstLoading,
  onPageChange,
  setError
}