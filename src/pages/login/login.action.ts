import jsSHA from 'jssha'
import { testGetData, login } from 'services/auth'
import { localStorageKey } from 'utils/constants'
import IGlobalTypes from 'utils/global-types'
import { AES, enc } from 'crypto-js'
import IAuthTypes, { authTypes } from './login.types'
import { errorResponse } from 'utils/error-response'
const passwordKey = 'aJniq9H7Jjkg86yTRvmxyBB'
const tokenKey = 'GSDG@2wfsdfqwgh558ri9b'

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
const getEmployeeProfileAction:
IAuthTypes.IGetEmployeeProfile = ({ client, id_badge }) => async dispatch => {
  try {
    dispatch({ type: authTypes.SET_LOADING, payload:true })
    type IResponse = IGlobalTypes.IGraphqlResponse<'view', 'v_employee_profiles', IAuthTypes.IUserProfile[]>
    const response:IResponse = await client.query({
      query:login.GET_EMPLOYEE_PROFILE,
      variables:{ id_badge },
      fetchPolicy:'no-cache'
    })
    
    const [userProfile] = response.data.v_employee_profiles
    if(userProfile) {
      localStorage.setItem(localStorageKey.USER_PROFILE, JSON.stringify(userProfile))
      dispatch({ type:authTypes.SET_USER_EMPLOYEE_PROFILE, payload:userProfile })
    } else {
      dispatch({ 
        type:authTypes.SET_ERROR, 
        payload:{ 
          isError:true, 
          errorMessage:'User not found', 
          errorCode:404 
        } 
      })
    }
  } catch(e) {
    const {
      isError,
      errorCode,
      errorMessage
    } = errorResponse(e)
    const errResponse:IAuthTypes.ISetErrorPayload = {
      isError,
      errorCode,
      errorMessage
    }
    dispatch({ type:authTypes.SET_ERROR, payload:errResponse })
  }
}
const onSubmitLoginAction:
IAuthTypes.IOnSubmitLogin = ({ userProfile, password }) => dispatch => {
  const { hash_password } = userProfile
  const bytes = AES.decrypt(hash_password, passwordKey)
  const truePassword = bytes.toString(enc.Utf8)

  if(truePassword === password) {
    const dt = new Date().toUTCString()
    const shaObj = new jsSHA('SHA-1', 'TEXT')
    shaObj.setHMACKey(tokenKey, 'TEXT')
    shaObj.update(`date: ${dt}`)
    const signature = shaObj.getHMAC('B64')
    const token = signature + userProfile.id_badge + 'true'

    const payload:Pick<IAuthTypes.IAuthState, 'token' | 'isAuthenticated'> = {
      token,
      isAuthenticated:true
    }
    localStorage.setItem(localStorageKey.TOKEN, token)
    dispatch({ type:authTypes.SET_USER_LOGIN, payload })
  } else {
    const errResponse:IAuthTypes.ISetErrorPayload = {
      isError:true,
      errorCode:401,
      errorMessage:'Invalid Credentials'
    }
    dispatch({ type: authTypes.SET_ERROR, payload:errResponse })
  }
}
const clearEmployeeProfileAction:IAuthTypes.IClearEmployeeProfile = () => dispatch => {
  localStorage.removeItem(localStorageKey.USER_PROFILE)
  localStorage.removeItem(localStorageKey.TOKEN)
  dispatch({ type:authTypes.CLEAR_USER_PROFILE, payload:null })
}
const onLogoutAction:IAuthTypes.IOnLogout = () => dispatch => {
  localStorage.removeItem(localStorageKey.USER_PROFILE)
  localStorage.removeItem(localStorageKey.TOKEN)
  dispatch({ type:authTypes.LOGOUT, payload:null })
}
export default {
  setValue,
  setError,
  setLoading,
  testGetDataAction,
  getEmployeeProfileAction,
  clearEmployeeProfileAction,
  onSubmitLoginAction,
  onLogoutAction
}