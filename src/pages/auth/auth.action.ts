import { ApolloError } from '@apollo/client'
import { testGetData, login } from 'services/auth'
import { localStorageKey } from 'utils/constants'
import IAuthTypes, { authTypes } from './auth.types'

const setValue:IAuthTypes.IAuthActionsSetValue = payload => dispatch => {
  dispatch({ type: authTypes.SET_VALUE, payload })
}

const setError:IAuthTypes.IAuthActionsSetError = payload => dispatch => {
  dispatch({ type: authTypes.SET_ERROR, payload })
}

const setLoading:IAuthTypes.IAuthActionSetLoading = payload => dispatch => {
  dispatch({ type: authTypes.SET_LOADING, payload })
}

const testGetDataAction:IAuthTypes.ITestGetData = () => async dispatch => {
  const response = await testGetData()
  if(response.isError) {
    console.log('error', response.errorMessage)
    const errResponse:IAuthTypes.ISetErrorPayload = {
      isError:true,
      errorCode:response.errorCode,
      errorMessage:response.errorMessage
    }
    dispatch({ type:authTypes.SET_ERROR, payload:errResponse })
  } else {
    dispatch({ type: authTypes.SET_DATA, payload: response.data })
  }
}
const getEmployeeProfileAction:IAuthTypes.IGetEmployeeProfile = ({ client, id_badge }) => async dispatch => {
  try {
    const response:IAuthTypes.IGraphqlResponseEmployeeProfile = await client.query({
      query:login.GET_EMPLOYEE_PROFILE,
      variables:{ id_badge },
      fetchPolicy:'no-cache'
    })
    const [userProfile] = response.data.v_employee_profiles
    if(userProfile) {
      localStorage.setItem(localStorageKey.USER_PROFILE, JSON.stringify(userProfile))
      dispatch({ type:authTypes.SET_USER_EMPLOYEE_PROFILE, payload:userProfile })
    } else {
      dispatch({ type:authTypes.SET_ERROR, payload:{ isError:true, errorMessage:'User not found', errorCode:404 } })
    }
  } catch(e) {
    console.log(e)
    const err = e as ApolloError
    const errResponse:IAuthTypes.ISetErrorPayload = {
      isError:true,
      errorCode:500,
      errorMessage:err.message
    }
    dispatch({ type:authTypes.SET_ERROR, payload:errResponse })
  }
}
export default {
  setValue,
  setError,
  setLoading,
  testGetDataAction,
  getEmployeeProfileAction
}