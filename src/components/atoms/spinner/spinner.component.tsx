import React from 'react'
import './spinner.style.css'

interface TStyle extends React.HTMLAttributes<HTMLDivElement> {
  isLoading?: boolean
}
const LoaderComponent:React.FC<TStyle> = ({ isLoading = true, ...props }) => {
  return isLoading ? (
    <div>
      <div {...props} className='k-loading-mask'>
        <span className='k-loading-text'>Loading</span>
        <div className='k-loading-image' />
        <div className='k-loading-color' />
      </div>
    </div>
  ): null
}
export default LoaderComponent