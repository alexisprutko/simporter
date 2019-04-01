import React, { Component } from 'react';
import { Route, withRouter } from "react-router-dom";
import { connect } from 'react-redux'
import PrivateRoute from './HOC/PrivateRoute'
import MenuAppBar from './components/Header'
import SignUp from './pages/SignUp'
import Login from './pages/Login'
import Home from './pages/Home'
import AlertComponent from './components/AlertComponent'
import { clearMessage, errorMessage } from './redux/ducks/alerts'

import './App.css';

class App extends Component {
  render() {
    const { user, alert: { active, message, type }, clearMessage } = this.props
    return (

      <div>
        <MenuAppBar auth={user.auth} user={user} />
      
          { active &&  <AlertComponent active={active} message={message} type={type} closeEvent={clearMessage} />  }
          <Route path="/login" component={Login} />
          <PrivateRoute path="/"  user={user} component={Home} />
       
      </div>

    );
  }
}

const mapStateToProps = (state) => ({
  user: state.user,
  alert: state.alert
})

const mapDispatchToProps =  { clearMessage, errorMessage }



export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App))
