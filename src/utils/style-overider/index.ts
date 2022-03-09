import { CSSProperties } from 'react'

type StyleOveriderFun = (defaultStyle:CSSProperties, superiorStyle?:CSSProperties) => CSSProperties

const styleOverider:StyleOveriderFun = (left, right) => {
  if (!right) return left
  return {
    ...left,
    ...right
  }
}
export default styleOverider