import { CSSProperties } from 'react'
import { navbarStyle } from 'utils/constants'

const errorContainer:CSSProperties = {
  display:'grid',
  placeItems:'center',
  height:`calc(100vh - ${navbarStyle.height})`
}
export default {
  errorContainer
}