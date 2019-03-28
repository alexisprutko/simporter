import React, { Component } from 'react';
import { Switch, Route, withRouter } from 'react-router-dom'
import { connect } from 'react-redux'

import Home from './pages/Home'
import Category from './pages/Category'
import Auth from './pages/Auth'

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Switch>
          {!this.props.auth && <Route component={Auth} /> }
          <Route path="/category" component={Category} />
          <Route path='/' component={Home} />
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  auth: state.user.auth
})

const mapDispatchToProps = {
  
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App))
