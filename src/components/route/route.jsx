import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { LoadApplicationState } from '../utils/localStorage'

import Description from '../description'
import Activeties from '../activeties'

class Router extends Component {

  constructor(props){
    super(props)
    this.loadData = this.loadData.bind(this)

    this.loadData()
  }

  loadData(){
    var data = LoadApplicationState()
    this.state = {
      isLoggedIn: data ? true : false,
      user: data
    }
  }

  render() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/pet-event/" exact={true} render={ 
                  (props) => <Description isLoggedIn={ this.state.isLoggedIn } {...props} /> 
                }/>
                <Route path="/activeties/" exact={true} render={ 
                  (props) => <Activeties history={this.props.history} isLoggedIn={ this.state.isLoggedIn }  user={ this.state.user } {...props} /> 
                }/>
                <Route path='*' render={ 
                  (props) => <Description isLoggedIn={ this.state.isLoggedIn } {...props} /> 
                }/>
            </Switch>
        </ BrowserRouter>
    );
  }

}

export default Router;
