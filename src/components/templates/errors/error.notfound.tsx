import React, { Fragment } from 'react'
import { useNavigate } from 'react-router-dom'
import { Button } from 'components/atoms/button'
import styles from './error.style'

const Error404:React.FC = () => {
  const navigation = useNavigate()
  return (
    <Fragment>
      <div style={styles.errorContainer}>
        <h1 className='h1-404'>
        Page Not Found<br/>
          <Button 
            onClick={() => navigation('/')}
          >
            Go Back
          </Button>
        </h1>
        <div className='frame'/>
      </div>
    </Fragment>
  )
}
export default Error404
