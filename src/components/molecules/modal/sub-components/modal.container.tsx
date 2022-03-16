import React, { CSSProperties } from 'react'
import styleOverider from 'utils/style-overider'
import { Card } from '../../card'
import styles from '../modal.style'

interface TProps {
  style?:CSSProperties,
  show?:boolean,
}
const Modal:React.FC<TProps> = ({
  children,
  style,
  show = true
}) => {
  return show ? (
    <Card style={styleOverider(styles.containerStyle, style)}>
      <div style={styles.contentStyle}>
        {children}
      </div>
    </Card>
  ): null
}
export default Modal