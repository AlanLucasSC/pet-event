import React, { Component } from 'react'

import Modal from '../../shared/modal/modal'
import { isPassword, isRga } from '../../utils/auth'

import { False, Void, InitialInput } from '../constant'
import { Input } from '../input'
import { Submit } from '../submit'
import { Loading } from '../loading'

export default class Login extends Component{
    constructor(props){
        super(props)

        this.state = {
            isLoading: False,
            isRga: Void,
            isPassword: Void,
            rga: InitialInput,
            password: InitialInput
        }

        this.handleSubmit = this.handleSubmit.bind(this)
        this.rgaChange = this.rgaChange.bind(this)
        this.passwordChange = this.passwordChange.bind(this)
    } 

    rgaChange(event){
        var rga = event.target.value
        this.setState({
            rga: rga,
            isRga: isRga(rga)
        });
    }

    passwordChange(event){
        var password = event.target.value
        this.setState({
            password: password,
            isPassword: isPassword(password)
        });
    }

    handleSubmit(event){
        event.preventDefault();
        console.log('baatata')
    }

    render(){
        return(
            <Modal id="login"> 
                <h3 className="login-heading mb-4">Login</h3>
                <form onSubmit={ this.handleSubmit }>

                    <Loading isLoading={ this.state.isLoading }>
                        <Input
                            type="text"
                            id="rga"
                            placeholder="RGA"
                            onChange={ this.rgaChange }
                            isValid={ this.state.isRga }
                            invalidMessage="Insira um rga válido"
                        >
                            RGA
                        </Input>
                        <Input
                            type="password"
                            id="password"
                            placeholder="Password"
                            onChange={ this.passwordChange }
                            isValid={ this.state.isPassword }
                            invalidMessage="Insira uma senha com no mínimo 8 caracteres"
                        >
                            Password
                        </Input>
                        <hr className="my-4"></hr>
                        <Submit> Login </Submit>
                    </Loading>

                </form>
            </Modal>
        )
    }
}