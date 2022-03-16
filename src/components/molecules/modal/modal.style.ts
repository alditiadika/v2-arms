import { CSSProperties } from 'react'
import { fixedZIndex } from 'utils/constants'

const containerStyle:CSSProperties = {
  position:'fixed',
  zIndex:fixedZIndex.modal,
  paddingTop:'100px',
  left:0,
  top:0,
  width:'100%',
  height:'100%',
  overflow:'auto',
  backgroundColor: 'rgba(0,0,0,0.4)'
}
const contentStyle:CSSProperties = {
  backgroundColor:'#fefefe',
  margin:'auto',
  width:'auto',
  borderRadius:'10px',
  padding:'10px'
}
const errorContentStyle:CSSProperties = {
  width:'200px',
  backgroundColor:'#fefefe',
  margin:'auto',
  borderRadius:'10px',
  padding:'10px',
  display:'grid',
  placeItems:'center'
}
const errorIconStyle:CSSProperties = {
  width:'100px',
  height:'100px'
}
const errorMessageStyle:CSSProperties = {
  fontSize:'20px',
  marginTop:'10px',
  marginBottom:'10px'
}
const buttonError:CSSProperties = {
  backgroundColor:'red',
  borderRadius:'5px',
  padding:'10px 20px'
}
export default {
  containerStyle,
  contentStyle,
  errorContentStyle,
  errorIconStyle,
  buttonError,
  errorMessageStyle
}