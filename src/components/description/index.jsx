import React, { Component } from 'react'

import Main from '../shared/container/main'
import ModalButton from '../shared/modal/button'
import Markdown from '../shared/markdown'
import Login from '../auth/login'
import Inscription from '../auth/inscription'

export default class Description extends Component {

    constructor(props){
        super(props)
    }

    render(){
        return (
            <Main>
                <div className="col-md-7 col-lg-8 bg-white rounded"> 
                    <div className="text-right">
                        <ModalButton target="#login"> Login </ModalButton>
                        <ModalButton target="#register"> Inscreva-se </ModalButton>
                    </div>
                    <Markdown />
                </div>
                <Login user={ this.props.user }/>
                <Inscription />
            </Main>
        )
    }
}