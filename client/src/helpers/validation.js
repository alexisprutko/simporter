import Messages from '../constants/ErrorMessages'
const EMAIL_REGEX = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
// const PHONE_NUMBER_REGEX = /^\(*\+*[1-9]{0,3}\)*-*[1-9]{0,3}[-. /]*\(*[2-9]\d{2}\)*[-. /]*\d{3}[-. /]*\d{4} *e*x*t*\.* *\d{0,4}$/;
// const URL_REGEX = /^(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-/]))?$/;
/* eslint-disable no-unused-expressions */

//  email validation
export const emailValidation = email => {
    email ? email = email.trim() : email
    if (!email) return Messages.EMAIL_REQUIRED
    else if (!EMAIL_REGEX.test(email)) return Messages.INVALID_EMAIL_ADDRESS
    else return false
}

// user name validation
export const userNameValidation = (userName = '') => {
    userName ? userName = userName.trim() : userName
    if (!userName) return 'User Name is Required'
    else if (userName.search(/\s/) > -1) return 'Invalid User Name'
    else if (userName && userName.length < 3) return 'User Name is too short'
    else return false

}
// last name validation
export const lastNameValidation =  (user = '') => {
    user ? user = user.trim() : user
    if (!user) return Messages.LAST_NAME_REQUIRED
    else return ''

}
// first name validations
export const firstNameValidation = (user = '') => {
    user ? user = user.trim() : user
    if (!user) return Messages.FIRST_NAME_REQUIRED
    else return ''

}
// password validation
export const passwordValidation = (password = '') => {
    if (!password) return Messages.PASSWORD_REQUIRED
    else if (password.length < 6) return Messages.PASSWORD_SHORT
    else return ''
}

export const repeatPasswordValidation = (password, repeatPassword) => {
    if (password !== repeatPassword) return 'Password isn\'t match'
    else return ''
}

