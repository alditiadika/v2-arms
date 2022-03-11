import { ApolloError } from '@apollo/client'
import axios from 'axios'

type TErrorResponse = {
  isError:boolean,
  errorCode:string | number,
  errorMessage:string
}
type TFn = (err:unknown, code?:number | string) => TErrorResponse
export const errorResponse:TFn = (err, code) => {
  if(err instanceof ApolloError) {
    return {
      isError:true,
      errorCode:code || 400,
      errorMessage:err.message
    }
  } 
  if(axios.isAxiosError(err)) {
    return {
      isError:true,
      errorCode:err.code || 400,
      errorMessage:err.message
    }
  }
  return {
    isError:true,
    errorCode:400,
    errorMessage:'Unexpected Error'
  }
}