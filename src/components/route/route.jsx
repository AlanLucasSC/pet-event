import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Description from '../description'

class Router extends Component {

  constructor(props){
    super(props)
    this.state = {
      isLoggedIn: false,
      user: {
        name: '',
        id: ''
      }
    }
  }

  render() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/pet-event/" exact={true} render={ (props) => <Description user={ this.state.user } {...props} /> }/>
                <Route path='*' render={ (props) => <Description user={ this.state.user } {...props} /> }/>
            </Switch>
        </ BrowserRouter>
    );
  }

}

export default Router;
