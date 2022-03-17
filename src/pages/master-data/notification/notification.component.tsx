import React, { useEffect } from 'react'
import { useApolloClient } from '@apollo/client'
import { GridPageChangeEvent } from '@progress/kendo-react-grid'
import { connect, useSelector } from 'react-redux'

import { IGlobalState } from 'store/reducers'
import HeaderMenu from 'components/molecules/header-menu'
import Grid from 'components/organisms/grid'
import { gridStyle, pathList } from 'utils/constants'

import notificationAction from './notification.action'
import INotificationTypes, { notificationColumnProps } from './notification.types'
import styles from './notification.style'
import customRenderCell from 'components/atoms/custom-cell-grid'
import { ModalError } from 'components/molecules/modal'

type TProps = {
  getDataGrid:INotificationTypes.INotificationGetData,
  onPageChange:INotificationTypes.INotificationPageChange,
  setError:INotificationTypes.INotificationSetError,
  onDataStateChange:INotificationTypes.INotificationDataStateChange,
  onClickFilter:INotificationTypes.INotificationOnClickFilter
}
const mapDispatchToProps:TProps = {
  getDataGrid:notificationAction.notificationGetDataFirstLoading,
  onPageChange:notificationAction.onPageChange,
  onDataStateChange:notificationAction.onDataStateChange,
  setError:notificationAction.setError,
  onClickFilter:notificationAction.onClickFilter,
}
const Notification:React.FC<TProps> = ({ 
  getDataGrid,
  onPageChange,
  onDataStateChange,
  setError,
  onClickFilter 
}) => {
  const client = useApolloClient()
  const {
    dataGrid,
    dataStates,
    isLoading,
    isError,
    errorMessage
  } = useSelector<IGlobalState, INotificationTypes.INotificationState>((state) => state.notificationMasterData)
  useEffect(() => {
    if(isLoading) {
      getDataGrid({ client, dataStates })
    }
  }, [isLoading])
  const pageChange = (event:GridPageChangeEvent) => {
    onPageChange({ client, dataStates, event, oldDataGrid:dataGrid })
  }
  const closeError = () => {
    setError({ errorCode:'', errorMessage:'', isError:false })
  }
  return (
    <div style={styles.container}>
      <ModalError 
        onClose={closeError}
        errorMessage={errorMessage}
        show={isError}
      />
      <HeaderMenu 
        menu='Notification' 
        path={pathList.masterData.path}
        routeName='Notification'
        isLoading={isLoading}
        filterable={dataStates.filterable}
        onClickFilter={onClickFilter}
      >
      </HeaderMenu>
      <Grid
        dataGrid={dataGrid}
        columns={notificationColumnProps}
        dataStates={dataStates}
        style={gridStyle}
        onPageChange={pageChange}
        cellRender={customRenderCell(['maintenance_plant', 'location'])}
        onDataStateChange={onDataStateChange}
      />
    </div>
  )
}
export default connect(null, mapDispatchToProps)(Notification)