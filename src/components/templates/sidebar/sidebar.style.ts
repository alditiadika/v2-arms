import IAppTypes from 'pages/app.types'
import { CSSProperties } from 'react'
import { sidebarStyle, navbarStyle, fixedZIndex } from 'utils/constants'

const menuItem:(selected:boolean) => CSSProperties = selected => ({
  width:'80px',
  height:'80px',
  fontSize:'10px',
  padding:'5px 0px',
  cursor:'pointer',
  borderLeft:selected ? '3px solid #ff6702' : undefined,
  borderTop:'1px solid #f3f3f3',
  borderBottom:'1px solid #f3f3f3',
  display:'grid',
  placeItems:'center'
})
const menuIcon:CSSProperties = {
  width:'35px',
  height:'35px'
}
const subMenuIcon:CSSProperties = {
  width:'22px',
  height:'22px',
}
const menuTitle:(selected:boolean) => CSSProperties = selected => ({
  fontSize:'10px',
  color:selected ? '#ff6702' : undefined,
})
const sidebarMenuContainer:(status:IAppTypes.TSidebarStatus) => CSSProperties = status => ({
  height:sidebarStyle.menuHeight,
  width:sidebarStyle.menuWidth,
  position:'fixed',
  top:navbarStyle.height,
  visibility:status === 'hideAll' ? 'hidden' :'visible',
  transition:'visibility 0s linear 0s, opacity 0s linear',
  zIndex:fixedZIndex.sidebar
})
const subMenuContainer:(status:IAppTypes.TSidebarStatus) => CSSProperties = status => ({
  width:sidebarStyle.subMenuWidth,
  height:sidebarStyle.menuHeight,
  backgroundColor:'white',
  overflowY:'scroll',
  position:'fixed',
  top:navbarStyle.height,
  left:sidebarStyle.menuWidth,
  zIndex:100,
  paddingLeft:'25px',
  visibility:status === 'showAll' ? 'visible' :'hidden',
  transition:'visibility 0s linear 0s, opacity 0s linear',
  boxShadow:'0 4px 2px 0 rgba(0,0,0,0.2)'
})
const subMenuGroupContainer:CSSProperties = {
  marginTop:'25px',
  paddingBottom:'25px'
}
// const subMenuItemContainer:CSSProperties = {

// }
const subMenuItem: CSSProperties = {
  display:'grid',
  alignItems:'center',
  gridTemplateColumns:'25px auto',
  columnGap:'5px',
  cursor:'pointer',
  marginTop:'15px'
}
const subMenuText:CSSProperties = {
  fontSize:'17px',
}
export default {
  menuItem,
  sidebarMenuContainer,
  menuIcon,
  subMenuIcon,
  menuTitle,
  subMenuContainer,
  subMenuGroupContainer,
  subMenuItem,
  subMenuText
}