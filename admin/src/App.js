import React, { Component } from 'react';
import { Route, Switch, withRouter, Redirect } from "react-router-dom";
import { connect } from 'react-redux'
// import PrivateRoute from './HOC/PrivateRoute'
// import MenuAppBar from './components/Header'
import Login from './pages/Login'
import Home from './pages/Home'
import AlertComponent from './components/AlertComponent'
import { clearMessage, errorMessage } from './redux/ducks/alerts'

import './App.css';


class App extends Component {
  render() {
    const { user, alert: { active, message, type }, clearMessage, location: { pathname } } = this.props

    if(!user.auth && pathname !== '/login') return <Redirect to="/login" />
    return (

      <div>
        {active && <AlertComponent active={active} message={message} type={type} closeEvent={clearMessage} />}
        <Switch>
          <Route path="/login" component={Login} />
          <Route path="/" component={Home} />
        </Switch>
      </div>

    );
  }
}

const mapStateToProps = (state) => ({
  user: state.user,
  alert: state.alert
})

const mapDispatchToProps = { clearMessage, errorMessage }



export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App))
