import { REGISTER_NEW_USER_ENDPOINT } from '../constants/endponints.js'

export const registerNewUserAPI = (user) => {
    return fetch(REGISTER_NEW_USER_ENDPOINT,{
        method:"POST",
        body: user,
        headers:{
            "Content-Type": "Content-Type"
        }
    })
}