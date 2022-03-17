import React from 'react'
import Typography from '@mui/material/Typography'
import styles from './header-menu.style'
import { Clickable } from 'components/atoms/button'
import { useNavigate } from 'react-router-dom'
import { Loader } from '@progress/kendo-react-indicators'

type TProps = {
  menu:string,
  path:string,
  routeName:string,
  isLoading?:boolean,
  filterable?:boolean,
  onClickFilter?:() => void
}

const HeaderMenu:React.FC<TProps> = ({ 
  menu, path, routeName, 
  children, isLoading = false,
  filterable = false,
  onClickFilter = () => { console.log('onclick filter') } 
}) => {
  const navigation = useNavigate()
  const iconClass = filterable ? 'k-i-filter-clear': 'k-i-filter'
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
        <div style={styles.menuName} id='menu-name'>
          <Typography variant='h5'>
            {menu}
          </Typography>
          {isLoading && <Loader type='infinite-spinner' />}
        </div>
      </div>
      <div style={styles.rightComponent}>
        {children}
        <Clickable onClick={onClickFilter}>
          <span
            style={styles.iconRightComponent} 
            className={'k-icon ' + iconClass} 
          />
        </Clickable>
      </div>
    </div>
  )
}
export default HeaderMenu