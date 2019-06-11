import React, { Component } from "react";
import {Route, Link, Redirect } from "react-router-dom";

import Main from '../shared/container/main'
import Activeties from '../activeties'
import ShowQrCode from '../qrCode/show'

import { RemoveApplicationState } from '../utils/localStorage'

export default class UserRoute extends Component {

    constructor(props){
        super(props)

        this.state = {
            quit: false
        }

        this.registered = this.registered.bind(this)
        this.quit = this.quit.bind(this)
    }

    quit(){
        RemoveApplicationState()
        this.props.reload()
        this.setState({
            quit: true
        })
    }

    registered(){
        return (
            <Main>
                <div className="col-md-10 col-lg-8 bg-white rounded"> 
                    <nav className="navbar navbar-expand-lg navbar-light bg-light mt-2 rounded shadow ">
                        <Link className="navbar-brand" to={`${this.props.match.url}/activeties`}>PET EVENTO</Link>
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav mr-auto">
                                <li className="nav-item">
                                    <Link className="nav-link" to={`${this.props.match.url}/activeties`}>Atividades</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to={`${this.props.match.url}/myQrCode`}>Código de Frequência</Link>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" data-toggle="modal" data-target="#changePassword">Mudar Senha</a>
                                </li>
                                <li className="nav-item">
                                    <a onClick={ this.quit } className="nav-link">Sair</a>
                                </li>
                            </ul>
                        </div>
                    </nav>
                    <Route path={`${this.props.match.path}activeties`} exact render={
                        (props) => <Activeties user={ this.props.user } {...props}/>
                    }/>
                    <Route path={`${this.props.match.path}myQrCode`} render={
                        (props) => <ShowQrCode {...props}/>
                    }/>
                </div>
            </Main>
        )
    }

    render(){
        if(this.state.quit)
            return <Redirect to={{
                pathname: "/pet-event",
            }}/>
        return this.registered()
    }
}