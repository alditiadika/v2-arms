import React, { Fragment, useEffect } from 'react'
import { connect, useSelector } from 'react-redux'
import { useApolloClient } from '@apollo/client'
import Typography from '@mui/material/Typography'

import RedirectDefaultPath from 'components/atoms/redirect-default-path'
import { IGlobalState } from 'store/reducers'
import capitalize from 'utils/capitalize'
import { Card } from 'components/molecules/card'
import { Input } from 'components/atoms/input'
import { Button } from 'components/atoms/button'

import ARMSLogo from 'assets/img/logo_arms@1.5x.png'
import styles from './login.style'
import IAuthTypes from './login.types'
import authActions from './login.action'
import IAppTypes from 'pages/app.types'
import appAction from '../app.action'

type TProps = {
  setValue:IAuthTypes.IAuthActionsSetValue,
  getEmployeeProfile:IAuthTypes.IGetEmployeeProfile,
  clearEmployeeProfile:IAuthTypes.IClearEmployeeProfile,
  onSubmitLogin:IAuthTypes.IOnSubmitLogin,
  selectMenu:IAppTypes.IAppActionSelectMenu,
  getTestData:IAuthTypes.ITestGetData
}
const mapDispatchToProps:TProps = {
  setValue: authActions.setValue,
  getEmployeeProfile:authActions.getEmployeeProfileAction,
  clearEmployeeProfile:authActions.clearEmployeeProfileAction,
  onSubmitLogin:authActions.onSubmitLoginAction,
  selectMenu:appAction.appActionSelectMenu,
  getTestData:authActions.testGetDataAction
}

const AuthComponent:React.FC<TProps> = ({ 
  setValue,
  getEmployeeProfile, 
  clearEmployeeProfile,
  onSubmitLogin,
  selectMenu,
  getTestData 
}) => {
  const client = useApolloClient()
  const { 
    isAuthenticated,
    isLoading,
    id_badge,
    loginStep,
    password,
    userProfile
  } = useSelector<IGlobalState, IAuthTypes.IAuthState>(state => state.auth)
  useEffect(() => {
    getTestData()
  }, [])
  const onClick = () => {
    if(loginStep === 1) {
      getEmployeeProfile({ client, id_badge })
    } else {
      onSubmitLogin({ userProfile, password })
      selectMenu({ menu:'dashboard', subMenu:null })
    }
  }

  return (
    <Fragment>
      {isAuthenticated && <RedirectDefaultPath from='/login' to='/' />}
      <main style={styles.loginContainer}>
        <Card style={styles.loginCard}>
          <div style={styles.loginLeftStyle}>
            <div style={{ textAlign:'center' }}>
              <img 
                src={ARMSLogo} 
                alt='ARMS' 
                style={styles.loginImageStyle}
              />
              <Typography 
                style={styles.loginTypographyStyle} 
                variant='subtitle1'
              >
                {'Assets Resource'}
                <br/>
              </Typography>
              <Typography 
                style={styles.loginTypographyStyle} 
                variant='subtitle1'
              >
                {'Management System'}
                <br/>
              </Typography>
              <Typography 
                style={styles.loginCaptionStyle} 
                variant='caption'
              >
                {'Copyright © 2021 PT. PETROSEA Tbk, All Right Reserved ⓘ'}
              </Typography>
            </div>
          </div>
          <div style={styles.loginRightSide}>
            <Typography variant='h6'>{'Login'}</Typography>
            <Input
              label={loginStep === 1 ?'Badge No.': 'Password'}
              type={loginStep === 1 ? 'text': 'password'}
              containerStyle={styles.loginForm.input}
              value={loginStep === 1 ? id_badge: password}
              onChange={e => setValue({
                field:loginStep === 1 ?'id_badge':'password', 
                value:loginStep === 1 ? capitalize.all(e.target.value): e.target.value
              })}
              onKeyPress={e => e.key === 'Enter' && onClick()}
            />
            <div style={styles.loginForm.buttonContainer}>
              <Button 
                style={styles.loginForm.buttonBack}
                hidden={loginStep === 1} 
                onClick={() => clearEmployeeProfile()}
              >
                {'Back'}
              </Button>
              <Button 
                onClick={onClick}
                style={styles.loginForm.buttonSubmit(isLoading)}
                isLoading={isLoading}
                disabled={isLoading}
              >
                {'Next'}
              </Button>
            </div>
          </div>
        </Card>
      </main>
    </Fragment>
  )
}
export default connect(null, mapDispatchToProps)(AuthComponent)