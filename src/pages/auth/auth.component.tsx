import { useApolloClient } from '@apollo/client'
import RedirectDefaultPath from 'components/atoms/redirect-default-path'
import React, { Fragment, useEffect } from 'react'
import { connect, useSelector } from 'react-redux'
import { IGlobalState } from 'store'
import authActions from './auth.action'
import IAuthTypes from './auth.types'

type TProps = {
  setValue?:IAuthTypes.IAuthActionsSetValue,
  getEmployeeProfile:IAuthTypes.IGetEmployeeProfile
}
const AuthComponent:React.FC<TProps> = ({ getEmployeeProfiles }) => {
  const client = useApolloClient()
  const { isAuthenticated } = useSelector<IGlobalState, IAuthTypes.IAuthState>(state => state.auth)
  // useEffect(() => {
  //   getEmployeeProfile({client, id_badge:'A3184'})
  // }, [])
  return (
    <Fragment>
      {isAuthenticated && (
        <RedirectDefaultPath from='/login' to='/' />
      )}
      <div>Auth Component</div>
    </Fragment>
  )
}
const mapDispatchToProps = {
  setValue: authActions.setValue,
  getEmployeeProfile:authActions.getEmployeeProfileAction
}
export default connect(null, mapDispatchToProps)(AuthComponent)