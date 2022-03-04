import React, { useState, Fragment } from 'react'
import './error.style.css'
import { Button } from 'reactstrap'
import { Navigate } from 'react-router-dom'

const Error404:React.FC = () => {
  const [isClick, setClick] = useState<boolean>(false)
  return isClick ? <Navigate to='/' /> :  (
    <Fragment>
      <h1 className='h1-404'>
      404<br/>
      Page Not Found<br/>
        <Button 
          onClick={() => setClick(true)}
          style={{ cursor:'pointer' }} 
          color='primary'
        >
          Go Back
        </Button>
      </h1>
      <div className='frame'/>

    </Fragment>

      
  )
}
export default Error404
