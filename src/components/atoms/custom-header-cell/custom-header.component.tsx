import React from 'react'
import { GridHeaderCellProps } from '@progress/kendo-react-grid'

type TFunc = (title:string) => React.ComponentType<GridHeaderCellProps>
const CustomHeaderCell:TFunc = (title) => {
  const funcReturn =  () => {
    const [foo, bar] = title.split(',')
    return (
      <div>
        <div>{foo}</div>
        <div>{bar}</div>
      </div>
    )
  }
  return funcReturn
}
export default CustomHeaderCell