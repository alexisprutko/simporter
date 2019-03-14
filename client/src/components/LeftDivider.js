import React from 'react'
import { ListItem, ListItemIcon, List, Divider,ListItemText } from '@material-ui/core'
import { Logo } from './ui'


import MailIcon from '@material-ui/icons/Mail';
import Dashboard from '@material-ui/icons/Dashboard'


export default function LeftDivider({classes}) {
  return (
    <div>
        <div className={classes.toolbar} />
        <Logo> Simporter </Logo>
        <Divider />
        <List>
          {['Dashboard', 'Rankings', 'Sub Rankings', 'Top 100 Forecast','New Product List', 'Messaging'].map((text, index) => (
            <ListItem  key={text} selected={text === 'Dashboard' ? true : false}>
              <ListItemIcon>{index % 2 === 0 ? <Dashboard /> : <MailIcon />}</ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
      </div>
    );

  
}
