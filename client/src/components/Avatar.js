import React from 'react';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Avatar from '@material-ui/core/Avatar'
import Button from '@material-ui/core/Button'
import Paper from '@material-ui/core/Paper'
import Sizes from '../constants/Sizes'
import { Grid } from '@material-ui/core';
import Colors from '../constants/Colors';
import { TextSpan } from './ui';


// test data
const options = [
  'None',
  'Atria',
  'Callisto',

];

class UserAvatar extends React.Component {
  state = {
    anchorEl: null,
  };

  handleClick = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleClose =  () => {
     this.setState({ anchorEl: null });
  };

  render() {
    const { anchorEl } = this.state;
    console.log(this.props)
    const open = Boolean(anchorEl);
    return (
      <Paper
        onClick={this.handleClick}
        style={{ maxHeight: 68, width: "210px", padding: "1rem", marginTop: "10px", cursor: "pointer", position: 'relative' }}
      >
        <Grid 
          container
          direction="row"
          justify="space-around"
          alignItems="center"
          onClick={this.handleClose}
        >
          <Avatar src="http://shing.mobile9.com/download/media/442/avatarmrbe_yfqlmi9e.jpg" />
        <TextSpan
          color={Colors.textBlue}
        >
          { this.props.user.username }
        
        </TextSpan>
        </Grid>
        <Menu
          id="long-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={this.handleClose}
          PaperProps={{
            style: {
              maxHeight: Sizes.AVATAR_MENU_ITEM_HEIGHT * 4,
              width: 200,
              zIndex: -1
            },
          }}
        >
          {options.map(option => (
            <MenuItem key={option} selected={option === 'Pyxis'} onClick={this.handleClose}>
              {option}
            </MenuItem>
          ))}
          <MenuItem onClick={this.props.signOut}> sign out </MenuItem>
        </Menu>
      </Paper>
    );
  }
}

export default UserAvatar;