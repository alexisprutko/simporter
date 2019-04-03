import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { Grid } from '@material-ui/core'

import { getFiles } from '../redux/ducks/fileUploader'
import FileItem from '../components/FileItem'
import { TextSpan } from '../components/ui';

class Files extends Component {
    componentDidMount = () => {
        this.props.getFiles()
    }
    render() {

        console.log(this.props)
        return (
            <Grid
                container

            >   
                {
                    this.props.files.length < 1 &&<Grid container justify="center">  <TextSpan size="1.7rem"> Nothing To Show </TextSpan> </Grid>
                }
                {
                    this.props.files.map(elem => <FileItem
                        id={elem.id}
                        name={elem.originalname}
                        size={elem.size}
                        key={elem.id}
                    />
                    )
                }
            </Grid>
        )
    }
}

const mapStateToProps = (state) => ({
    files: state.files
})

const mapDispatchToProps = {
    getFiles
}
export default connect(mapStateToProps, mapDispatchToProps)(Files)