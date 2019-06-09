import React, { Component } from 'react'
import Main from '../shared/container/main'

export default class Activeties extends Component {
    constructor(props){
        super(props)

        console.log(this.props.user)
    }

    render(){
        return (
            <Main>
                <div>
                    Atividades
                </div>
            </Main>
        )
    }
}