import React from 'react'
import { Spinner } from 'reactstrap'
import styleOverider from 'utils/style-overider'
import styles from '../button.style'
interface TProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  isLoading?: boolean
}
const ButtonComponent:React.FC<TProps> = ({ children, isLoading = false, ...props }) => {
  return (
    <button 
      {...props}
      style={styleOverider(styles.buttonStyle, props.style)}
    >
      {isLoading ? <Spinner /> : children}
    </button>
  )
}
export default ButtonComponent