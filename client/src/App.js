import React, { Component } from 'react';
import { Switch, Route, withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import Confirm from './pages/Confirm'

import Home from './pages/Home'
import Category from './pages/Category'
import Auth from './pages/Auth'

import { getData } from './redux/ducks/overallRankings'

import './App.css';

class App extends Component {
  componentDidMount() {
    this.props.getData()
  }
  
  render() {
    return (
      <div className="App">
        <Switch>
          <Route path='/confirm/:id' component={Confirm} />
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
  getData
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App))
