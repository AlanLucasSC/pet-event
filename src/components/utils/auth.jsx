import { True, False, Void, Nothing } from '../auth/constant'

export const isEmail = (email) => {
    var validEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return validEmail.test(String(email).toLowerCase());
}

export const isPassword = (password) => {
    var validPassword = /\w{8,}/;
    return validPassword.test(String(password));
}

export const isVoid = (value) => {
    return value === Void ? True : False
}

export const isNothing = (value) => {
    return value === Nothing ? True : False
}

export const isRga = (value) => {
    var rgaLength = 12
    return value.length === rgaLength ? True : False
}