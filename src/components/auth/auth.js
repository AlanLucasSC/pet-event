import FirebaseService from '../services/firebaseService'
import { False } from './constant'

export const doLogin = ( form ) => {
    console.log( form )
}

export const doInscription = async ( form ) => {
    let user = await FirebaseService.getOneData('users', form.rga)
    if( user ){
        let error = { isSuccess: False, message: 'RGA já cadastrado'}
        return error
    }
    let isSuccess = await FirebaseService.insertData('users', form.rga, form)
    let success = { isSuccess: isSuccess, message: 'Cadastrado com successo'}
    return success
}