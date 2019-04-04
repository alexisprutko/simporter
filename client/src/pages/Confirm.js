import React, { Component } from 'react'
import { CircularProgress, Grid } from '@material-ui/core';
import { connect } from 'react-redux'

import { confirmEmail } from '../redux/ducks/auth'
import { TextSpan, Separator } from '../components/ui'
import Colors from '../constants/Colors';



class Confirm extends Component {
    componentDidMount = () => {
        const { match: { params: { id } }, history: { push } } = this.props

        this.props.confirmEmail({ token: id, push })
        console.log(this.props.match.params)
    }

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

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = {
    confirmEmail
}

export default connect(mapStateToProps, mapDispatchToProps)(Confirm)