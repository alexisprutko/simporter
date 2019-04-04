import React, { Component } from 'react'
import { CircularProgress, Grid } from '@material-ui/core';
import { TextSpan, Separator } from '../components/ui'
import Colors from '../constants/Colors';

export default class Confirm extends Component {
    render() {
        return (
            <Grid
                container
                direction="column"
                justify="center"
                alignItems="center"
            >
                <Separator vertical="3.5rem" />
                <CircularProgress size={120} />
                <Separator vertical="3rem" />
                <TextSpan color={Colors.textBlue} size="2rem"> Loading .... </TextSpan>
            </Grid>
        )
    }
}
