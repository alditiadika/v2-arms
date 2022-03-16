import React from 'react'
import Typography from '@mui/material/Typography'
import styles from './header-menu.style'
import { Clickable } from 'components/atoms/button'
import { useNavigate } from 'react-router-dom'

type TProps = {
  menu:string,
  path:string,
  routeName:string
}

const HeaderMenu:React.FC<TProps> = ({ menu, path, routeName, children }) => {
  const navigation = useNavigate()
  return (
    <div style={styles.container}>
      <div id='left-component'>
        <div style={styles.shortcutMenu}>
          <Clickable 
            onClick={() => navigation('/')}
            style={styles.shortcutMenuItem}
            className='hover-orange'
          >
            <Typography variant='caption'>{'Home'}</Typography>
          </Clickable>
          <Typography 
            variant='caption' 
            style={styles.shortcutMenuItem}
          >
            {'|'}
          </Typography>
          <Clickable 
            onClick={() => navigation(path)}
            style={styles.shortcutMenuItem}
            className='hover-orange'
          >
            <Typography variant='caption'>{routeName}</Typography>
          </Clickable>
        </div>
        <div id='menu-name'>
          <Typography variant='h5'>
            {menu}
          </Typography>
        </div>
      </div>
      <div style={styles.rightComponent}>
        {children}
      </div>
    </div>
  )
}
export default HeaderMenu