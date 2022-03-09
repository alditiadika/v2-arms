import React from 'react'
import './spinner.style.css'

type TStyle = React.HTMLAttributes<HTMLDivElement>
const ButtonComponent:React.FC<TStyle> = ({ ...props }) => {
  return (
    <div {...props} className='lds-ring'>
      <div/>
      <div/>
      <div/>
      <div/>
    </div>
  )
}
export default ButtonComponent