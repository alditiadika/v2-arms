import React from 'react'
import styles from '../sidebar.style'
import { OverridableComponent } from '@mui/material/OverridableComponent'
import { SvgIconTypeMap, Typography } from '@mui/material'

type TProps = {
  MaterialIcon: OverridableComponent<SvgIconTypeMap> & { muiName: string },
  selected: boolean,
  onClick: () => void,
  title?:string,
  show?: boolean
}
const MenuItem:React.FC<TProps> = ({
  children,
  MaterialIcon,
  selected,
  title,
  onClick,
  show = true
}) => {
  return show ? (
    <div onClick={() => onClick()} style={styles.menuItem(selected)}>
      <MaterialIcon 
        style={styles.menuIcon} 
        htmlColor={selected ? '#ff6702' : undefined}
      />
      {title && (
        <Typography style={styles.menuTitle(selected)} variant='caption'>
          {title}
        </Typography>
      )}
      {children}
    </div>
  ): null
}
export default MenuItem