import { BASE_URL, UPLOAD_ENDPOINT, GET_UPLOAD_FILES } from '../constants/endponints'

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
        methodL: "GET",
        headers: {
            "Authorization": token,
        }
    })
}