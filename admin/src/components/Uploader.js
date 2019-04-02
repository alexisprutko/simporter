import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Grid, Button } from '@material-ui/core'
import { DropzoneArea } from 'material-ui-dropzone'

import { uploadFile } from '../redux/ducks/fileUploader'
import { Separator } from './ui'

class Uploader extends Component {
  state = {
    data: null
  }
  handleUploadFile = () => {
    this.props.uploadFile(this.state.data)
  }
  handleChange = async (event) => {
    console.log(event)
    const data = new FormData()
    await data.append('file', event[0])
    await this.setState({ data })
  }
  render() {

    return (
      <div>
        <Grid
          container
          direction="column"
          justify="center"
          alignItems="center"

        >
          {/* <input type="file" onChange={this.handleChange} /> */}
          <Separator vertical="1.5rem" />
          <DropzoneArea
            onChange={this.handleChange}
            acceptedFiles={['application/*']}
            filesLimit={1}
          />
          <Separator vertical="1.5rem" />
          <Button
            onClick={this.handleUploadFile}
            disabled={!this.state.data}
            color="primary"
            variant="contained"
            size="large"
          >
            upload
            </Button>

        </Grid>

      </div>
    )
  }
}

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = {
  uploadFile
}

export default connect(mapStateToProps, mapDispatchToProps)(Uploader)
