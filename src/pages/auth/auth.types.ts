import { ApolloClient } from '@apollo/client'
import { Url } from 'url'
import IGlobalTypes from 'utils/global-types'

declare namespace IAuthTypes {
  interface ITestData {
    id:number | string
    name:string
    createdAt:Date
    avatar:Url
  }
  interface IUserProfile {
    id:number
    id_badge:string
    id_role:number
    location:string
    name:string
    plant:string
    role:string
    hash_password:string
  }
  type IGraphqlResponseEmployeeProfile = IGlobalTypes.IGraphqlResponse<{v_employee_profiles:''}, IUserProfile[]>
  interface IAuthState extends IGlobalTypes.IGlobalInitialState {
    email: string
    username: string
    password: string
    token:string
    isAuthenticated: boolean
    loginStep:1 | 2
    userProfile: IUserProfile
    testData: ITestData[]
  }
  interface ISetValuePayload {
    field:'id_badge' | 'password'
    value: string 
  }
  interface ISetErrorPayload {
    isError: boolean
    errorMessage: string
    errorCode: number | string
  }
  interface IGetEmployeeProfilePayload {
    client:ApolloClient<object>,
    id_badge:string
  }
  export type IAuthActionsSetValue = IGlobalTypes.IAction<ISetValuePayload>
  type IAuthActionsSetError = IGlobalTypes.IAction<ISetErrorPayload>
  type IAuthActionSetLoading = IGlobalTypes.IAction<boolean>
  type ITestGetData = IGlobalTypes.IAction<void>
  type IGetEmployeeProfile = IGlobalTypes.IAction<IGetEmployeeProfilePayload>
}
export default IAuthTypes
export const authTypes = {
  SET_VALUE:'AUTH TYPES REDUCER SET VALUE',
  SET_ERROR:'AUTH TYPES REDUCER SET ERROR',
  SET_LOADING:'AUTH TYPES REDUCER SET LOADING',
  SET_DATA:'AUT TYPES REDUCER SET DATA',
  SET_USER_EMPLOYEE_PROFILE:'AUT TYPES REDUCER SET USER EMPLOYEE PROFILE',
}