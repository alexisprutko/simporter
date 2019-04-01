import React, { Component } from 'react'
import { Link, Switch, Route } from 'react-router-dom'
import { Button } from '@material-ui/core'
import Uploader from '../components/Uploader'

export default class Home extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route path="/" exact component={Uploader} />
          <Route path="/register"exact render={(prop) => (
               <Button
               component={Link}
               to="/signup"
               color="secondary"
             >
               signup
             </Button>
          )} />
        </Switch>
      
      
      </div>
    )
  }
}
