import React from 'react'
import IGlobalTypes from 'utils/global-types'

type TFunc = (fieldRenderSpinner:string | string[]) => IGlobalTypes.TCustomCellRender
const CustomRenderCell:TFunc = (fieldRenderSpinner) => {
  const funcReturn:IGlobalTypes.TCustomCellRender = (defaultRender, { dataItem, field }) => {
    if(dataItem.isLoadingItem) {
      if(typeof fieldRenderSpinner === 'string') {
        if(field === fieldRenderSpinner) {
          return (
            <td>
              <span className='k-icon k-i-loading' />
            </td>
          )
        }
        return defaultRender
      }
      if(fieldRenderSpinner.includes(field || 'abcdefghijklmnopqrstuvwxyz')) {
        return (
          <td>
            <span className='k-icon k-i-loading' />
          </td>
        )
      }
    }
    return defaultRender
  }
  return funcReturn
}
export default CustomRenderCell