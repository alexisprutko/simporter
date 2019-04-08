import React from 'react';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Avatar from '@material-ui/core/Avatar'
import Paper from '@material-ui/core/Paper'
import Sizes from '../constants/Sizes'
import { Grid } from '@material-ui/core';
import Colors from '../constants/Colors'
import ArrowDropDown from '@material-ui/icons/ArrowDropDown'
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

  handleClose = () => {
    this.setState({ anchorEl: null });
  };

  render() {
    const { anchorEl } = this.state;

    const open = Boolean(anchorEl);
    return (
      <Paper
        onClick={this.handleClick}
        style={{
          height: 56,
          width: "224px",
          padding: "0.5rem 1rem",
          marginTop: "10px",
          cursor: "pointer",
          boxShadow: '0px 12px 40px rgba(209, 220, 246, 0.32)'

        }}
      >
        <Grid
          container
          direction="row"
          justify="space-between"
          alignItems="center"
          onClick={this.handleClose}
        >
          <div
            style={{
              width: 44,
              height: 44,
              border: `2px solid ${Colors.mainBlue}`,
              borderRadius: '50%',
              boxSizing: 'border-box'
            }}
          >
            <Avatar src="http://shing.mobile9.com/download/media/442/avatarmrbe_yfqlmi9e.jpg" />
          </div>
          <TextSpan
            color={Colors.textBlue}
            style={{ lineHeight: '2rem' }}
          >
            {this.props.user.username}
          </TextSpan>
          <TextSpan>
            <ArrowDropDown sizes="1rem" />
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