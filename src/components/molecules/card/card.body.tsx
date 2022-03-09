import React, { CSSProperties } from 'react'
import styleOverider from 'utils/style-overider'
import styles from './card.style'

type TProps = {
  style?:CSSProperties,
  id?:string,
  className?:string
}

const CardBody:React.FC<TProps> = ({ 
  children, style,
  id, className 
}) => {
  return (
    <div
      id={id}
      className={className}
      style={styleOverider(styles.cardBodyRoot, style)}
    >
      {children}
    </div>
  )
}
export default CardBody