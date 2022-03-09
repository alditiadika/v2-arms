import React from 'react'
import { Card, CardBody } from '../../molecules/card'
import styles from './navbar.style'

const Navbar:React.FC = () => {
  return (
    <Card style={styles.navbarRoot}>
      <CardBody style={styles.navbarBody}>
        <div>toggle</div>
        <div>ARMS LOGO</div>
        <div>rightmenu</div>
      </CardBody>
    </Card>
  )
}
export default Navbar