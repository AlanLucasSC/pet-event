import React, { Component } from 'react'

import { Error } from '../error'
import Modal from '../../shared/modal/modal'
import { isPassword, isRga } from '../../utils/auth'

import { True, False, Void, InitialInput } from '../../constant'
import { Input } from '../input'
import { Submit } from '../submit'
import { Loading } from '../loading'
import { doLogin } from '../auth'

export default class Login extends Component{
    constructor(props){
        super(props)

        this.state = {
            loginState: {
                isSuccess: Void,
                message: InitialInput
            },
            isLoading: False,
            isRga: Void,
            isPassword: Void,
            rga: InitialInput,
            password: InitialInput
        }

        this.handleSubmit = this.handleSubmit.bind(this)
        this.rgaChange = this.rgaChange.bind(this)
        this.passwordChange = this.passwordChange.bind(this)
        this.LoadingOn = this.LoadingOn.bind(this)
        this.LoadingOff = this.LoadingOff.bind(this)

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

    LoadingOn(){
        this.setState({
            isLoading: True
        })
    }

    LoadingOff(){
        this.setState({
            isLoading: False
        })
    }

    async handleSubmit(event){
        event.preventDefault()

        this.LoadingOn()

        var loginState = await doLogin({
            rga: this.state.rga,
            password: this.state.password
        })

        if(!loginState.isSuccess){
            this.setState({
                loginState: loginState,
                isRga: Void,
                isPassword: Void,
            })
        } else {
            console.log(this.loginSuccess)
            console.log(this.props.user)
            //this.props.loginSuccess(loginState)
        }

        setTimeout( this.LoadingOff , 3000);
    }

    render(){
        return(
            <Modal id="login"> 
                <h3 className="login-heading mb-4">Login</h3>
                <form onSubmit={ this.handleSubmit }>

                    <Loading isLoading={ this.state.isLoading }>
                        <Input
                            type="text"
                            id="rgaLogin"
                            placeholder="RGA"
                            onChange={ this.rgaChange }
                            isValid={ this.state.isRga }
                            invalidMessage="Insira um rga válido"
                        >
                            RGA
                        </Input>
                        <Input
                            type="password"
                            id="passwordLogin"
                            placeholder="Password"
                            onChange={ this.passwordChange }
                            isValid={ this.state.isPassword }
                            invalidMessage="Insira uma senha com no mínimo 8 caracteres"
                        >
                            Senha
                        </Input>
                        <hr className="my-4"></hr>
                        <Error { ...this.state.loginState }/>
                        <Submit id="idLogin"> Login </Submit>
                    </Loading>

                </form>
            </Modal>
        )
    }
}