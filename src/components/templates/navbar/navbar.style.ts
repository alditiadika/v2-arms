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
  alignItems:'center',
  height:'100%'
}
const navbarMiddleComponent:CSSProperties = {
  textAlign:'center'
}
const navbarLogo:CSSProperties = {
  cursor:'pointer',
  width:'100%',
  maxWidth:'400px',
  height:'38px'
}
const navbarCopyright:CSSProperties = {
  fontSize:'10px',
  color:'gray',
  cursor:'default'
}
const navbarUsername:CSSProperties = {
  fontSize:'.8rem',
}
const navbarDropdown:CSSProperties = {
  position:'fixed',
  zIndex:100,
  top:`calc(${navbarStyle.height} + 2px)`,
  right:'20px',
  backgroundColor:'#fff',
  minWidth:'145px',
  display:'grid',
  justifyItems:'center'
}
export default {
  navbarRoot,
  navbarBody,
  navbarLogo,
  navbarCopyright,
  navbarMiddleComponent,
  navbarUsername,
  navbarDropdown
}