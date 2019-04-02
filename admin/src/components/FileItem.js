import React, { Component } from 'react'
import PropTypes from 'prop-types'

import { Grid } from  '@material-ui/core'
import xlsx from '../static/images/xlsx.png'
import { TextSpan } from '../components/ui'
import EllipsisText from "react-ellipsis-text"

export default class FileItem extends Component {

  render() {
    return (
      <Grid
        container
        direction="column"
        justify="center"
        alignItems="center"
        style={{maxWidth: 100, margin: 5, padding: 3, border: '1px solid #006060', borderRadius: 5}}
      >
        <img src={xlsx} alt=""  style={{width: 70}}/>
        <TextSpan size="1rem" >
            <EllipsisText text={this.props.name } length={13} />
            
        </TextSpan>
        <TextSpan size=".8rem">{ this.props.size }</TextSpan>
      </Grid>
    )
  }
}

FileItem.propTypes = {
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    size: PropTypes.number.isRequired,
}