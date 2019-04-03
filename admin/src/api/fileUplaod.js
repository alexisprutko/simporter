import { BASE_URL, UPLOAD_ENDPOINT, GET_UPLOAD_FILES, UPLOAD_FILE_ENDPOINT } from '../constants/endponints'

export const uploadFileAPI = (data, token) => {
    const url = BASE_URL + UPLOAD_ENDPOINT
    // console.log(data)
    return fetch(url, {
        method: "POST",
        headers: {
            "Authorization": token,
        },
        body: data

    })
}

export const getFilesAPI = (token) => {
    const url = BASE_URL + GET_UPLOAD_FILES
    return fetch(url, {
        method: "GET",
        headers: {
            "Authorization": token,
        }
    })
}

export const convertFileAPI = (id, token) => {
    const url = BASE_URL + UPLOAD_FILE_ENDPOINT
    const body = JSON.stringify({ id })
    return fetch(url, {
        method: "POST",
        headers: {
            "Authorization": token,
            'Content-Type': 'application/json'
        },
        body
    })
}