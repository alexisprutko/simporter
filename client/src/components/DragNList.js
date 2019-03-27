import React from 'react';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import PropTypes from 'prop-types'
import ExpandMore from '@material-ui/icons/ExpandMore'

import { TextSpan } from './ui'
import Colors from '../constants/Colors'


class DragNListItem extends React.Component {
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
    const { title, handleClick, itemList } = this.props

    return (
      <div>
        <Button
          aria-owns={anchorEl ? 'simple-menu' : undefined}
          aria-haspopup="true"
          onClick={this.handleClick}
        >
          <TextSpan color={Colors.textBlue} size="0.8rem"  style={{ display: 'flex', alignItems:'flex-end'}} >
            {title}
            < ExpandMore />
          </TextSpan>
        </Button>
        <Menu
          id="simple-menu"
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={this.handleClose}
        >

          {
            itemList.map(elem => <MenuItem key={elem} onClick={this.handleClose}> <TextSpan>{elem}</TextSpan> </MenuItem>)
          }
        </Menu>
      </div>
    );
  }
}
DragNListItem.propTypes = {
  title: PropTypes.string.isRequired,
  handleClick: PropTypes.func.isRequired,
  itemList: PropTypes.array.isRequired
}

export default DragNListItem
