import { CSSProperties } from 'react'
import React from 'react'
import './style.scss'

interface TStyle extends React.InputHTMLAttributes<HTMLInputElement> {
  label?:string
  error?:boolean
  containerStyle?:CSSProperties
}

const Input:React.FC<TStyle> = ({ label, containerStyle, error, ...props }) => {
  return (
    <div style={{ padding:0, ...containerStyle }} className='container'>
      <div className={'did-floating-label-content ' + (error ? 'did-error-input':'')}>
        <input 
          {...props}
          className={'did-floating-input ' + (props.className ? props.className: '')} 
          placeholder=' '
        />
        <label className='did-floating-label'>{label}</label>
      </div>
    </div>
  )
}
export default Input