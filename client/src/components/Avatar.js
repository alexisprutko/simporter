import React from 'react';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Avatar from '@material-ui/core/Avatar'
import Button from '@material-ui/core/Button'
import  Sizes from '../constants/Sizes'


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
      <div>
        <Button
            onClick={this.handleClick}
        >
            <Avatar src="http://shing.mobile9.com/download/media/442/avatarmrbe_yfqlmi9e.jpg" />
            <h4> Area Strak </h4>
        </Button>
        <Menu
          id="long-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={this.handleClose}
          PaperProps={{
            style: {
              maxHeight: Sizes.AVATAR_MENU_ITEM_HEIGHT * 4.5,
              width: 200,
            },
          }}
        >
          {options.map(option => (
            <MenuItem key={option} selected={option === 'Pyxis'} onClick={this.handleClose}>
              {option}
            </MenuItem>
          ))}
        </Menu>
      </div>
    );
  }
}

export default UserAvatar;