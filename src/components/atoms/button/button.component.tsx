import React from 'react'
import { Spinner } from 'reactstrap'
import styles from './button.style'

interface TStyle extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  isLoading?: boolean
}
const ButtonComponent:React.FC<TStyle> = ({ children, isLoading = false, ...props }) => {
  return (
    <button 
      {...props}
      style={{ ...styles, ...props.style }}
    >
      {isLoading ? <Spinner /> : children}
    </button>
  )
}
export default ButtonComponent