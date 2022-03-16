import React, { useEffect } from 'react'
import { useApolloClient } from '@apollo/client'
import { connect, useSelector } from 'react-redux'

import { IGlobalState } from 'store/reducers'
import HeaderMenu from 'components/molecules/header-menu'
import Grid from 'components/organisms/grid'
import { gridStyle } from 'utils/constants'

import notificationAction from './notification.action'
import INotificationTypes, { notificationColumnProps } from './notification.types'
import styles from './notification.style'
import Spinner from 'components/atoms/spinner'
import customRenderCell from 'components/atoms/custom-cell-grid'
import { ModalError } from 'components/molecules/modal'

type TProps = {
  getDataGrid:INotificationTypes.INotificationGetData,
  onPageChange:INotificationTypes.INotificationPageChange,
  setError:INotificationTypes.INotificationSetError,
}
const mapDispatchToProps:TProps = {
  getDataGrid:notificationAction.notificationGetDataFirstLoading,
  onPageChange:notificationAction.onPageChange,
  setError:notificationAction.setError
}
const Notification:React.FC<TProps> = ({ 
  getDataGrid,
  onPageChange,
  setError 
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
  return (
    <div style={styles.container}>
      <ModalError 
        onClose={() => setError({ errorCode:'', errorMessage:'', isError:false })}
        errorMessage={errorMessage}
        show={isError}
      />
      <Spinner isLoading={isLoading} />
      <HeaderMenu 
        menu='Notification' 
        path='/master-data'
        routeName='Notification'
      >
      </HeaderMenu>
      <Grid
        dataGrid={dataGrid}
        columns={notificationColumnProps}
        dataStates={dataStates}
        style={gridStyle}
        onPageChange={event => onPageChange({ client, dataStates, event, oldDataGrid:dataGrid })}
        cellRender={customRenderCell(['maintenance_plant', 'location'])}
      />
    </div>
  )
}
export default connect(null, mapDispatchToProps)(Notification)