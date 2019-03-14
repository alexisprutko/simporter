import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom'
import './App.css';
import Home from './pages/Home'
import Category from './pages/Category'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <Route path="/category" component={Category} />
          <Route path='/' component={Home} />
        </Switch>
      </div>
    );
  }
}

export default App;
