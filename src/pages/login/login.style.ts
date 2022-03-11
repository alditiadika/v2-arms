import { CSSProperties } from 'react'
const loginContainer:CSSProperties = {
  display:'grid',
  gridTemplateColumns:'auto',
  justifyItems:'center',
  alignItems:'center',
  paddingTop:'50px'
}
const loginCard:CSSProperties = {
  height:420,
  display:'flex'
}
const loginLeftStyle:CSSProperties = {
  backgroundColor:'#2c2c2c',
  backgroundSize:'cover',
  display:'grid',
  alignItems:'center',
  gridTemplateColumns:'auto',
  justifyItems:'center',
  color:'white',
  padding:'10px 40px'
}
const loginImageStyle:CSSProperties = {
  marginBottom:'10px'
}
const loginTypographyStyle:CSSProperties = {
  marginBottom:'10px'
}
const loginCaptionStyle:CSSProperties = {
  marginTop:'50px',
  cursor:'pointer'
}
const loginRightSide:CSSProperties = {
  width:'500px',
  padding:'80px'
}
type LoginFormCSSType = {
  input:CSSProperties,
  buttonContainer:CSSProperties,
  buttonSubmit:(isLoading:boolean) => CSSProperties,
  buttonBack:CSSProperties
}
const loginForm:LoginFormCSSType = {
  input: {
    marginBottom:'15px'
  },
  buttonContainer:{
    display:'flex',
    justifyContent:'right'
  },
  buttonSubmit:(isLoading) => ({
    padding:'10px 25px',
    cursor:isLoading ? 'not-allowed':'pointer'
  }),
  buttonBack:{
    marginRight:5,
    backgroundColor:'white',
    color:'#ff6702',
    padding:'10px 25px'
  }
}

export default {
  loginContainer,
  loginCard,
  loginLeftStyle,
  loginRightSide,
  loginImageStyle,
  loginTypographyStyle,
  loginCaptionStyle,
  loginForm
}