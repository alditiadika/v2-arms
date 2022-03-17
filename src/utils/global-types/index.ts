import { CompositeFilterDescriptor, SortDescriptor } from '@progress/kendo-data-query'
import { GridCellProps, GridColumnProps, GridProps } from '@progress/kendo-react-grid'
import { ScrollMode } from '@progress/kendo-react-grid/dist/npm/ScrollMode'
import { CSSProperties } from 'react'

/** *
  * Declare global types
*/
type AddPostfix<TKey extends string, Postfix extends string> = `${TKey}${Capitalize<Postfix>}`
type AddPrefix<TKey extends string, Prefix extends string> = `${Prefix}${Capitalize<TKey>}`
type TypeGraphql = 'view' | 'create' | 'update' | 'count'
type ResolveField<GQLType extends TypeGraphql, Tkey extends string> = 
  GQLType extends 'view' ? Tkey : 
  GQLType extends 'create' ? AddPrefix<Tkey, 'create'> :
  GQLType extends 'update' ? AddPrefix<Tkey, 'update'> : 
  GQLType extends 'count' ? AddPostfix<Tkey, 'connection'> :
  Tkey
  
declare namespace IGlobalTypes {
  export type Nullable<T> = { [K in keyof T]: T[K] | null }
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
  export interface IGraphqlResponse<GQLType extends TypeGraphql, Key extends string, TData = null> {
    readonly data:{
      [k in ResolveField<GQLType, Key>]: GQLType extends 'count' ? { aggregate: { count:number } }: TData
    }
  }
  interface ICustomColumn extends GridColumnProps {
    show:boolean
  }
  interface ICustomDataStates {
    skip:number
    take:number
    total:number
    sortable:boolean
    filterable:boolean
    reorderable:boolean
    scrollable:ScrollMode
    filter?:CompositeFilterDescriptor
    sort?:SortDescriptor[]
  }
  interface ICustomGrid extends GridProps {
    dataGrid:object[]
    dataStates:ICustomDataStates
    style?:CSSProperties
    columns:ICustomColumn[]
    children?:React.FunctionComponent<GridColumnProps>
    showTotal?:boolean
  }
  type TCustomCellRender = (defaultRendering: React.ReactElement<HTMLTableCellElement> | null, props: GridCellProps) => 
    React.ReactElement<HTMLTableCellElement> | React.ReactElement<HTMLTableCellElement>[] | null
}
export default IGlobalTypes