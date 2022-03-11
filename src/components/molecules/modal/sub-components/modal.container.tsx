import React from 'react'
import { Card } from '../../card'

type TProps = Record<string, unknown>
const Modal:React.FC<TProps> = ({
  children
}) => {
  return (
    <Card>
      {children}
    </Card>
  )
}
export default Modal