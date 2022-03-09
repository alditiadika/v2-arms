import { CSSProperties } from 'react'
import { navbarStyle } from 'utils/constants'

const navbarRoot:CSSProperties = {
  position:'fixed',
  zIndex:99,
  top:0,
  left:0,
  width:navbarStyle.width,
  height:navbarStyle.height,
  padding:'0 20px'
}
const navbarBody:CSSProperties = {
  padding:0,
  display:'flex',
  flexDirection:'row',
  flexWrap:'wrap',
  justifyContent:'space-between',
  alignContent:'center',
  height:'100%'
}
export default {
  navbarRoot,
  navbarBody
}