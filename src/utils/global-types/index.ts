/** *
  * Declare global types
*/

declare namespace IGlobalTypes {
  export type IDispatch<TParamAction> = (t:TParamAction) => void
  //eslint-disable-next-line
  export type IActionObj = {type:string, payload:any}
  export type IReducer<IState> = (state:IState, action:IActionObj) => IState
  //eslint-disable-next-line
  export type IAction<TPayload> = (payload:TPayload) => (dispatch:IDispatch<IActionObj>) => any
  export interface IGlobalInitialState {
    isLoading:boolean
    isError:boolean
    errorCode:number | string
    errorMessage:string
  }
  export interface IServiceResponse<TData> {
    isError:boolean
    errorMessage:string
    errorCode:number | string
    data:TData
  }
  interface IGraphqlResponse<Key, TData> {
    readonly data:{
      [Property in keyof Key]:TData
    }
  }
}
export default IGlobalTypes