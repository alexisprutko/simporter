import React, { Component } from 'react'
import { Grid } from '@material-ui/core'
import { connect } from 'react-redux'

import LoginForm from '../components/Forms/LoginForm'
import RegistrationForm from '../components/Forms/RegistrationForm'
import AlertComponent from '../components/AlertComponent'

import { Separator } from '../components/ui'
import logo from '../static/images/logo.svg'

import { REGISTRATION, LOGIN } from '../constants/auth'
import { loginUser, registerNewUser } from '../redux/ducks/auth'
import { clearMessage, errorMessage } from '../redux/ducks/alerts'


class Auth extends Component {
    constructor(props) {
        super(props)
        this.state = {
            comp: LOGIN
        }
    }
    changePage = (name) => {
        this.setState({ comp: name })
    }
    componentSwitcher = (comp) => {
        switch (comp) {
            case LOGIN: return LoginForm
            case REGISTRATION: return RegistrationForm
            default: return LoginForm
        }
    }
    handleClick = (data) => {
        if (this.state.comp === REGISTRATION) {
            return this.props.registerNewUser(data)
        }
        return this.props.loginUser(data)

    }
    render() {
        const { comp } = this.state
        const Comp = this.componentSwitcher(comp)
        const { alert: { active, message, type }, clearMessage } = this.props
        return (
            <Grid
                container
                direction="column"
                justify="center"
                alignItems="center"
            >   {active && <AlertComponent active={active} message={message} closeEvent={clearMessage} type={type} />}
                <Separator vertical="3rem" />
                <img src={logo} alt="" />
                <Separator vertical="3rem" />
                <Comp changePage={this.changePage} handleClick={this.handleClick} clearMessage={clearMessage} />
            </Grid>
        )
    }
}

const mapStateToProps = (state) => ({
    alert: state.alert
})

const mapDispatchToProps = {
    loginUser,
    registerNewUser,
    clearMessage,
    errorMessage
}


export default connect(mapStateToProps, mapDispatchToProps)(Auth)