import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import RegisterForm from '../components/Forms/RegisterForm'

import { registerNewUser } from '../redux/ducks/userD'

class SignUp extends Component {
  render() {
    return (
      <div>
        <RegisterForm
           createUser={this.props.registerNewUser}
           history={this.props.history}
        />
      </div>
    )
  }
}

const mapStateToProps = (state) => ({

})
const mapDispatchToProps = {
  registerNewUser
}
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SignUp))