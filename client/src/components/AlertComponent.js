import React, { Component } from 'react'
import { Grid } from '@material-ui/core'
import Close from '@material-ui/icons/Close'
import Error from '@material-ui/icons/Error'
import PropTypes from 'prop-types';

import Colors from '../constants/Colors'
import { AlertComponentBox, TextSpan } from './ui'

export default class AlertComponent extends Component {
    componentDidMount = () => {
        // setTimeout(this.props.closeEvent, 10000)
    }
    render() {
        // console.log(this.props)
        const { active, closeEvent, message, bottom } = this.props
        return (
            <AlertComponentBox
                type="error"
                // material-ui warning
                bottom={bottom ? 1 : 0}
                active={active ? 1 : 0}
            >
                <Grid
                    style={{ height: '100%' }}
                    container
                    justify="space-between"
                    alignItems="center"
                >
                    <TextSpan color={Colors.white}>  <Error /> </TextSpan>
                    <TextSpan color={Colors.white}>  {message} </TextSpan>
                    <TextSpan color={Colors.white} style={{cursor: 'pointer'}} onClick={closeEvent}>  <Close /> </TextSpan>

                </Grid>
            </AlertComponentBox>
        )
    }
}

AlertComponent.propTypes = {
    type: PropTypes.oneOf(['error', 'warning', 'success']),
    message: PropTypes.string.isRequired,
    closeEvent: PropTypes.func.isRequired,
    active: PropTypes.bool
}
AlertComponent.defaultProps = {
    type: 'error',
    active: false
}   