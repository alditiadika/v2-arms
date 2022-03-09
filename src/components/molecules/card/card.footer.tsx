import React, { CSSProperties } from 'react'
import styleOverider from 'utils/style-overider'
import styles from './card.style'

type TProps = {
  style?:CSSProperties,
  id?:string,
  className?:string
}

const CardFooter:React.FC<TProps> = ({ 
  children, style,
  id, className 
}) => {
  return (
    <div
      id={id}
      className={className}
      style={styleOverider(styles.cardFooterRoot, style)}
    >
      {children}
    </div>
  )
}
export default CardFooter