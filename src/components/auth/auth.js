import FirebaseService from '../services/firebaseService'
import { False } from './constant'
import md5 from 'md5'
import { sendEmail } from '../utils/email'

export const doLogin = ( form ) => {
    console.log( form )
}

export const doInscription = async ( form ) => {
    let user = await FirebaseService.getOneData('users', form.rga)
    if( user ){
        let error = { isSuccess: False, message: 'RGA já cadastrado'}
        return error
    }
    let isSuccess = await FirebaseService.insertData('users', form.rga, { ...form, password: md5(form.rga) })
    let success = { isSuccess: isSuccess, message: 'Cadastrado com successo.'}

    sendEmail( form.email, form.rga )

    return success
}