import React from 'react'
import Typography from '@mui/material/Typography'
import { OverridableComponent } from '@mui/material/OverridableComponent'
import { SvgIconTypeMap } from '@mui/material'

import IAppTypes from 'pages/app.types'
import styles from '../sidebar.style'
import { generateIconSubMenu } from 'utils/generate-icon-menu'

type TOnclick = (item:IAppTypes.ISubMenuItem) => void
type TPropsGroup = {
  subMenuGroup: IAppTypes.ISubMenuItem[],
  groupName: IAppTypes.TMenuGroup,
  onClick: TOnclick
}
type TPropsItem = {
  subMenuItem: IAppTypes.ISubMenuItem,
  MaterialIcon: OverridableComponent<SvgIconTypeMap> & { muiName: string },
  onClick: TOnclick
}

const SubMenuItem:React.FC<TPropsItem> = ({
  subMenuItem,
  MaterialIcon,
  onClick
}) => {
  return (
    <div 
      style={styles.subMenuItem}
      onClick={() => onClick(subMenuItem)}
    >
      <MaterialIcon
        style={styles.subMenuIcon} 
        htmlColor={subMenuItem.selected ? '#ff6702' : undefined}
      />
      <Typography 
        variant='subtitle2'
        color={subMenuItem.selected ? '#ff6702' : undefined}
      >
        {subMenuItem.title}
      </Typography>
    </div>
  )
}

const SubMenuGroup:React.FC<TPropsGroup> = ({
  subMenuGroup,
  groupName,
  onClick
}) => {
  const groupTitle = groupName.split('_').join(' ').toUpperCase()
  return (
    <div className='no-scrollbar' style={styles.subMenuGroupContainer}>
      <Typography variant='subtitle1'>
        {groupTitle}
      </Typography>
      {subMenuGroup.map((subMenuItem, index) => (
        <SubMenuItem
          key={index}
          subMenuItem={subMenuItem}
          MaterialIcon={generateIconSubMenu(subMenuItem.subMenuName)}
          onClick={(item) => onClick(item)}
        />
      ))}
    </div>
  )
}
export default SubMenuGroup