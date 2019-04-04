import { REGISTER_NEW_USER_ENDPOINT, LOGIN_USER_ENDPOINT, BASE_URL, CONFIRM_EMAIL_ENDPOINT } from '../constants/endponints.js'

export const registerNewUserAPI = (user) => {
    const url = BASE_URL + REGISTER_NEW_USER_ENDPOINT
    const body = JSON.stringify(user)
    return fetch(url, {
        method: "POST",
        body,
        headers: {
            "Content-Type": "application/json"
        }
    })
}
export const loginAPI = (data) => {
    const url = BASE_URL + LOGIN_USER_ENDPOINT
    const body = JSON.stringify(data)
    return fetch(url, {
        headers: {
            "Content-Type": "application/json"
        },
        method: "POST",
        body
    })
}

export const confirmEmail = (token) => {
    const url = BASE_URL + CONFIRM_EMAIL_ENDPOINT
    token = `Bearer ${token}`
    return fetch(url, {
        method: 'POST',
        headers: {
            "Content-Type": "application/json",
            "Authorization": token,
        },
    })
}