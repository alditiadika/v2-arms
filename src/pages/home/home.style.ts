import { CSSProperties } from 'react'
import { navbarStyle } from 'utils/constants'

const homeContainer:CSSProperties = {
  padding:20,
  backgroundColor:'#EAEAEA',
  minHeight:`calc(100vh - ${navbarStyle.height})`
}
export default {
  homeContainer
}