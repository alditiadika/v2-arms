import IGlobalTypes from 'utils/global-types'
import { localStorageKey } from 'utils/constants'
import IAuthTypes, { authTypes } from './login.types'

const defaultUserProfile:IAuthTypes.IUserProfile =  {
  id:0,
  id_badge:'',
  id_role:0,
  name:'',
  hash_password:'',
  location:'',
  role:'',
  plant:'',
}
const getUserProfile:() => IAuthTypes.IUserProfile = () => {
  const stringUProfile = localStorage.getItem(localStorageKey.USER_PROFILE)
  if(stringUProfile) {
    const userProfile:IAuthTypes.IUserProfile = JSON.parse(stringUProfile)
    return userProfile
  } 
  return defaultUserProfile
}
const initialState: IAuthTypes.IAuthState = {
  isLoading:false,
  isError:false,
  errorCode:0,
  errorMessage:'',
  id_badge: '',
  password: '',
  token: '',
  isAuthenticated: localStorage.getItem(localStorageKey.TOKEN) ? true : false,
  loginStep:localStorage.getItem(localStorageKey.USER_PROFILE) ? 2 : 1,
  userProfile:getUserProfile(),
  testData:[]
}
const authReducer:IGlobalTypes.IReducer<IAuthTypes.IAuthState> = (state = initialState, action) => {
  switch (action.type) {
  
  case authTypes.SET_LOADING: {
    return {
      ...state,
      isLoading:action.payload
    }
  }

  case authTypes.SET_ERROR: {
    const { errorCode, isError, errorMessage }:IAuthTypes.ISetErrorPayload = action.payload 
    return {
      ...state,
      isLoading:false,
      isError,
      errorCode,
      errorMessage
    }
  }

  case authTypes.SET_VALUE: {
    const { value, field }:IAuthTypes.ISetValuePayload = action.payload 
    return {
      ...state,
      [field]: value,
    }
  }

  case authTypes.SET_DATA: {
    const testData:IAuthTypes.ITestData[] = action.payload
    return {
      ...state,
      testData
    }
  }
  case authTypes.SET_USER_EMPLOYEE_PROFILE:{
    const userProfile:IAuthTypes.IUserProfile = action.payload
    return {
      ...state,
      userProfile,
      loginStep:2,
      isLoading:false
    }
  }
  case authTypes.CLEAR_USER_PROFILE:{
    return {
      ...state,
      userProfile:defaultUserProfile,
      token:'',
      loginStep:1
    }
  }
  case authTypes.SET_USER_LOGIN:{
    const {
      isAuthenticated,
      token
    }:Pick<IAuthTypes.IAuthState, 'token' | 'isAuthenticated'> = action.payload
    return {
      ...state,
      isAuthenticated:isAuthenticated || false,
      token: token || ''
    }
  }
  case authTypes.LOGOUT: {
    return {
      ...initialState,
      isAuthenticated:false,
      loginStep:1,
      userProfile:defaultUserProfile
    }
  }
  default:
    return state
  }
}
export default authReducer