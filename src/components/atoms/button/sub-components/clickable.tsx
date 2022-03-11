import React from 'react'
import styleOverider from 'utils/style-overider'
import styles from '../button.style'

interface TProps extends React.HTMLAttributes<HTMLDivElement> {
  style?:React.CSSProperties
}
const Clickable:React.FC<TProps> = ({ children, style, ...props }) => {
  return (
    <div 
      {...props}
      style={styleOverider(styles.clickableStyle, style)}
    >
      {children}
    </div>
  )
}
export default Clickable