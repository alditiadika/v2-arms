import { GridColumnProps } from '@progress/kendo-react-grid'
import { CSSProperties } from 'react'

interface TColumn extends GridColumnProps {
  show:boolean
}
interface Props {
  dataStates:{
    skip:number
    take:number
    total:number
    sortable:boolean
    filterable:boolean
    reorderable:boolean
  },
  style:CSSProperties,
  columns:TColumn[],
  children?:React.FunctionComponent<GridColumnProps>
}
const defaultProps:Partial<Props> = {
  dataStates:{
    skip:0,
    take:10,
    total:0,
    sortable:true,
    filterable:false,
    reorderable:true,
  },
  columns:[]
}
export namespace GridProps {
   export type TProps = Props & typeof defaultProps
}
export default GridProps