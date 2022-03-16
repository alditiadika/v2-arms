import React, { Fragment } from 'react'
import { useNavigate } from 'react-router-dom'
import { connect, useSelector } from 'react-redux'

import { IGlobalState } from 'store/reducers'
import { Card } from 'components/molecules/card'
import styles from './sidebar.style'
import MenuItem from './sub-components/menu'
import IAppTypes from 'pages/app.types'
import appAction from 'pages/app.action'
import { generateIconMenu } from 'utils/generate-icon-menu'
import SubMenuGroup from './sub-components/submenu'

type TProps = {
  onSelectMenu: IAppTypes.IAppActionSelectMenu
}
const mapDispatchToProps = {
  onSelectMenu:appAction.appActionSelectMenu
}
const Sidebar:React.FC<TProps> = ({ onSelectMenu }) => {
  const { sidebar } = useSelector<IGlobalState, IAppTypes.IAppState>(state => state.app)
  const navigation = useNavigate()
  
  const onCLickMenu:(menu:IAppTypes.ISidebarState['selectedMenu']) => void = (selectedMenu) => {
    const noneSubMenu = selectedMenu.menu === 'dashboard' || selectedMenu.menu === 'controlPanel'
    if(noneSubMenu) {
      navigation(selectedMenu.pathMenu)
    } 
    onSelectMenu({ menu:selectedMenu.menu, subMenu:null })
  }

  const menuSelected = sidebar.menu.filter(x => x.selected)
  const onClickSubMenu:
  (sub:IAppTypes.ISubMenuItem, menu:IAppTypes.IMenuItem) => void = (subMenu, menu) => {
    const pathNav = menu.path + subMenu.path
    navigation(pathNav)
    onSelectMenu({ menu:menu.menu, subMenu:subMenu.subMenuName })
  }
  return (
    <Fragment>
      <Card style={styles.sidebarMenuContainer(sidebar.status)}>
        {sidebar.menu.map((menu, index) => (
          <MenuItem
            key={index}
            MaterialIcon={generateIconMenu(menu.menu)}
            selected={menu.selected}
            onClick={() => onCLickMenu({ menu:menu.menu, pathMenu:menu.path })}
            title={menu.title}
          />
        ))}
      </Card>
      <Card style={styles.subMenuContainer(sidebar.status)}>
        {menuSelected.map((menu) => (
          menu.group.map((group) => {
            const subMenuGroup = menu.subMenu.filter(x => x.group === group)
            return (
              <SubMenuGroup
                key={Math.random()}
                groupName={group}
                subMenuGroup={subMenuGroup}
                onClick={(subMenu) => onClickSubMenu(subMenu, menu)}
              />
            )
          })
        ))}
      </Card>
    </Fragment>
  )
}
export default connect(null, mapDispatchToProps)(Sidebar)