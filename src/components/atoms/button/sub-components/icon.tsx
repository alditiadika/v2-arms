import React from 'react'
import styleOverider from 'utils/style-overider'
import styles from '../button.style'

interface TProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src:string
}
const ButtonIcon:React.FC<TProps> = ({ src, ...props }) => {
  return (
    <img 
      {...props} 
      src={src} 
      style={styleOverider(styles.iconStyle, props.style)}
    />
  )
}
export default ButtonIcon