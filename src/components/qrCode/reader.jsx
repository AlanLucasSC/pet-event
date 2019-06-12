import React, { Component } from 'react'
import QrReader from "react-qr-reader";

import { Loading } from '../shared/loading'
import { False, True } from '../constant';

export default class Reader extends Component {
    constructor(props){
        super(props)
        
        this.state = {
            activityName: this.props.match.params.activity,
            delay: 500,
            isLoading: False
        }

        this.handleScan = this.handleScan.bind(this)
    }

    handleScan(data) {
        if (data) {
            this.setState({
                isLoading: True
            })
            console.log( data )
            setTimeout(() => {
                this.setState({
                    isLoading: False
                })
            }, 2000);
        }
    }
    
    handleError(err) {
        console.error(err);
    }

    render(){
        return (
            <div className="mt-2 mb-2 p-3">
                <div className="row justify-content-center">
                    <div className="card col-lg-5 col-md-8 col-sm-8">
                        <Loading isLoading={ this.state.isLoading }>
                            <QrReader
                                delay={this.state.delay}
                                onError={this.handleError}
                                onScan={this.handleScan}
                                style={{ width: "100%" }}
                            />
                            <div className="card-body">
                                <h5 className="card-title">Leitor de Frequência</h5>
                                <p className="card-text text-justify">
                                    Coloque o leitor em frente do código do inscrito. Quando for reconhecido, será alertado se a frequência foi efetuada ou se deu erro.
                                </p>
                            </div>
                        </Loading>
                    </div>
                </div>
            </div>
        )
    }
}