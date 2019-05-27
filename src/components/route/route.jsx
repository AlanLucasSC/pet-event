import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import { True, False, InitialInput } from '../constant'

import Description from '../description'

class Router extends Component {

  constructor(props){
    super(props)
    this.state = {
      isLoggedIn: False,
      user: {
        name: InitialInput,
        id: InitialInput,
        rga: InitialInput
      }
    }

    this.loginSuccess = this.loginSuccess.bind(this)
  }

  loginSuccess(user){
    this.setState({
      isLoggedIn: True,
      user: user
    })

    console.log(this.state)
  }

  render() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/pet-event/" exact={true} render={ (props) => <Description user={ this.state.user } loginSuccess={ this.loginSuccess.bind(this) } {...props} /> }/>
                <Route path='*' render={ (props) => <Description user={ this.state.user } {...props} /> }/>
            </Switch>
        </ BrowserRouter>
    );
  }

}

export default Router;
