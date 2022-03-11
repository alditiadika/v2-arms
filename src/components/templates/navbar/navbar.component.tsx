import React, { Fragment, useState } from 'react'
import { connect, useSelector } from 'react-redux'
import { Card, CardBody } from '../../molecules/card'
import Typography from '@mui/material/Typography'

import { IGlobalState } from 'store/reducers'
import NavbarToggle from 'assets/img/toggle-nav.svg'
import NavbarLogo from 'assets/img/nav-logo.svg'
import appAction from 'pages/app.action'
import IAppTypes from 'pages/app.types'
import styles from './navbar.style'
import { Clickable, Icon } from 'components/atoms/button'
import { Tooltip } from 'components/molecules/modal'
import { 
  AuthActions as authActions,
  AuthTypes as IAuthTypes 
} from 'pages/login'

type TProps = {
  onClickToggle:IAppTypes.IAppActionToggleSidebar,
  onLogout:IAuthTypes.IOnLogout
}
const mapDispatchToProps:TProps = {
  onClickToggle:appAction.appActionClickToggleNav,
  onLogout:authActions.onLogoutAction
}
const Navbar:React.FC<TProps> = ({ onClickToggle, onLogout }) => {
  const { userProfile } = useSelector<IGlobalState, IAuthTypes.IAuthState>(state => state.auth)
  const [showDropdown, setShowDropDown] = useState<boolean>(false)
  return (
    <Fragment>
      {showDropdown && (
        <Card style={styles.navbarDropdown}>
          <CardBody>
            <Clickable onClick={() => onLogout()}>
              <Typography variant='subtitle2'>
                {'Log Out'}
              </Typography>
            </Clickable>
          </CardBody>
        </Card>
      )}
      <Card style={styles.navbarRoot}>
        <CardBody style={styles.navbarBody}>
          <div id='navbar-toogle'>
            <Icon
              onClick={() => onClickToggle()}
              src={NavbarToggle}
            />
          </div>
          <div style={styles.navbarMiddleComponent} id='navbar-logo'>
            <Icon
              style={styles.navbarLogo}
              src={NavbarLogo}
            />
            <Tooltip
              title={'version 0'}
              placement='right'
            >
              <Typography style={styles.navbarCopyright} variant='subtitle2'>
                {'Copyright © 2021 PT. PETROSEA Tbk, All Right Reserved ⓘ'}
              </Typography>
            </Tooltip>
          </div>
          <div id='navbar-account-info'>
            <Clickable 
              style={styles.navbarUsername}
              onClick={() => setShowDropDown(!showDropdown)}
            >
              {userProfile.name}
            </Clickable>
          </div>
        </CardBody>
      </Card>
    </Fragment>
  )
}
export default connect(null, mapDispatchToProps)(Navbar)