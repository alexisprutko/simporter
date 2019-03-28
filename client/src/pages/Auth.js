import React, { Component } from 'react'
import { Grid } from '@material-ui/core'
import { connect } from 'react-redux'

import LoginForm from '../components/Forms/LoginForm'
import RegistrationForm from '../components/Forms/RegistrationForm'
import { Separator } from '../components/ui'
import logo from '../static/images/logo.svg'

import { REGISTRATION, LOGIN } from '../constants/auth'
import { loginUser } from '../redux/ducks/auth'


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
    
            return this.props.loginUser(data)
       
    }
    render() {
        const { comp } = this.state
        const Comp = this.componentSwitcher(comp)
        return (
            <Grid
                container
                direction="column"
                justify="center"
                alignItems="center"
            >
                <Separator vertical="3rem" />
                <img src={logo} alt="" />
                <Separator vertical="3rem" />
                <Comp changePage={this.changePage} handleClick={this.handleClick} />
            </Grid>
        )
    }
}

const mapStateToProps = (state) => ({
  
})

const mapDispatchToProps = {
    loginUser
}


export default connect(mapStateToProps, mapDispatchToProps)(Auth)