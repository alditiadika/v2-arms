import { CSSProperties } from 'react'

const container:CSSProperties = {
  display:'flex',
  justifyContent:'space-between',
  alignItems:'center'
}
const rightComponent:CSSProperties = {
  marginRight:'10px',
  gap:'5px'
}
const shortcutMenu:CSSProperties = {
  display:'flex',
}
const shortcutMenuItem:CSSProperties = {
  marginRight:'5px'
}
const menuName:CSSProperties = {
  display:'flex',
  gap:'5px',
  alignItems:'center',
  minWidth:'40px'
}
const iconRightComponent:CSSProperties = {
  fontSize:'20px'
}
export default {
  container,
  rightComponent,
  shortcutMenu,
  shortcutMenuItem,
  menuName,
  iconRightComponent
}