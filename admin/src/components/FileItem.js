import React, { Component } from 'react'
import PropTypes from 'prop-types'

import { Grid, Button } from '@material-ui/core'
import xlsx from '../static/images/xlsx.png'
import { TextSpan } from '../components/ui'
import EllipsisText from "react-ellipsis-text"
import Colors from '../constants/Colors';

export default class FileItem extends Component {
  constructor(porps) {
    super(porps);
    this.state = {
      toggle: false
    }
  }
  handleToggle = (event) => {
    event.stopPropagation()
    this.setState((state) => ({ toggle: !state.toggle }))
  }
  render() {
    return (
      <Grid
        container
        direction="column"
        justify="center"
        alignItems="center"
        style={{
          maxWidth: 100,
          margin: 5,
          padding: 3,
          border: '1px solid #006060',
          borderRadius: 5,
          cursor: "pointer",
          position: 'relative'
        }}

        onClick={this.handleToggle}
      >
        {
          this.state.toggle && (<div
            style={{ position: 'absolute', width: '100%', height: '100%', backgroundColor: Colors.opWhite }}
          >
            <Grid
              container
              alignItems="center"
              justify="center"
              style={{ height: "100% ", zIndex: -1 }}
              onClick={event => event.stopPropagation()}
            >
              <Button color="primary" onClick={() => this.props.handleClick(this.props.id)}> <TextSpan color={Colors.mainBlue} weight="900">UPLOAD</TextSpan> </Button>
              <Button onClick={this.handleToggle}>  <TextSpan color={Colors.mainPink} weight="900">CANCEL</TextSpan></Button>
            </Grid>
          </div>)

        }
        <img src={xlsx} alt="" style={{ width: 70 }} />
        <TextSpan size="1rem" >
          <EllipsisText text={this.props.name} length={12} />

        </TextSpan>
        <TextSpan size=".8rem">{this.props.size}</TextSpan>
      </Grid>
    )
  }
}

FileItem.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  size: PropTypes.number.isRequired,
  handleClick: PropTypes.func.isRequired
}