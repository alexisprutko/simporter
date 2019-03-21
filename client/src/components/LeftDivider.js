import React from 'react'
import { ListItemIcon, List, Divider } from '@material-ui/core'
import { Link } from 'react-router-dom'

import Strings from '../constants/Strings'
import { Logo, LeftNavigationListItem, LeftNavigationListItemText } from './ui'
import data from '../testData/navigation'


import dashActive from '../static/images/dashbordIconActive.svg'
import dashIcon from '../static/images/dashboard.svg'
import rankingActive from '../static/images/rankingIconActive.svg'
import rankingIcon from '../static/images/rankingIcon.svg'
import rankingSubActive from '../static/images/rankingSubActive.svg'
import rankingSub from '../static/images/rankingSub.svg'
import top from '../static/images/top.svg'
import topActive from '../static/images/topActive.svg'
import messaging from '../static/images/messaging.svg'
import messagingActive from '../static/images/messagingActive.svg'
import logo from '../static/images/logo.svg'


const dashboardIcon = (path, activeName) => {
  switch (path) {
    case '/': return path === activeName ? dashActive : dashIcon
    case '/rankings': return path === activeName ? rankingActive : rankingIcon
    case '/forecast': return path === activeName ? dashActive : dashIcon
    case '/rankings-sub': return path === activeName ? rankingSubActive : rankingSub
    case '/top-product-list': return path === activeName ? topActive : top
    case '/messaging': return path === activeName ? messagingActive : messaging

    default:
      break;
  }
}

export default function LeftDivider(props) {
  console.log(props)
  const { classes, activeName, handleNavigation } = props
  return (
    <div>
      {/* <div className={classes.toolbar} /> */}
      <Logo
        onClick={() => handleNavigation("/")}
      >
        <img src={logo} alt="" />
      </Logo>
      <Divider />
      <List className={classes.listBox}>
        {data.map((elem, index) => (
          <LeftNavigationListItem
            key={elem.path}
            to={elem.path}
            component={Link}
            selected={elem.path === activeName}
          >
            <ListItemIcon>
              <img
                src={dashboardIcon(elem.path, activeName)}
                alt="logo"
              />
            </ListItemIcon>
            <LeftNavigationListItemText selected={elem.path === activeName} >
              {elem.name}
            </LeftNavigationListItemText>
          </LeftNavigationListItem>
        ))}
      </List>
    </div>
  );


}
