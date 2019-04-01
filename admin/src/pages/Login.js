import React, { Component } from 'react'
import LoginForm from '../components/Forms/LoginForm'
import { connect } from 'react-redux'
import { Grid } from '@material-ui/core'
import { TextSpan, Separator } from '../components/ui'

import { loginUser, signOut } from '../redux/ducks/userD'
import { clearMessage } from '../redux/ducks/alerts'

import Colors from '../constants/Colors'


class Login extends Component {
  componentDidMount = () => {
    this.props.signOut()
  }

  render() {
    const { clearMessage, loginUser } = this.props
    return (
      <Grid
        container
        direction='column'
        justify="center"
        alignItems='center'
      >
        <Separator vertical="2rem" />
        <TextSpan size="2.5rem" color={Colors.mainBlue} weight="800">Admin</TextSpan>
        <Separator vertical="2rem" />
        <LoginForm handleClick={loginUser} clearMessage={clearMessage} />
      </Grid>
    )
  }
}

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = {
  loginUser,
  clearMessage,
  signOut
}


export default connect(mapStateToProps, mapDispatchToProps)(Login)