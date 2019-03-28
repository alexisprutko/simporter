import { REGISTER_NEW_USER_ENDPOINT , LOGIN_USER_ENDPOINT} from '../constants/endponints.js'

export const BASE_URL = "http://localhost:3011"

export const registerNewUserAPI = (user) => {
    return fetch(REGISTER_NEW_USER_ENDPOINT,{
        method:"POST",
        body: user,
        headers:{
            "Content-Type": "Content-Type"
        }
    })
}
export const loginAPI = (data) => {
    const url = BASE_URL + LOGIN_USER_ENDPOINT
    const body = JSON.stringify(data)
    console.log(data)
    return fetch(url, {
        headers:{
            "Content-Type": "application/json"
        },
        method: "POST",
        body
    })
}