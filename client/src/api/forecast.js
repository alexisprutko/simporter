import  {TOP_FORECAST_ENDPOINT, BASE_URL } from '../constants/endponints.js'

export const getDataForecast = (token) => {
    const url = BASE_URL + TOP_FORECAST_ENDPOINT
    console.log(url)
    return fetch(url, {
        headers: {
            "Content-Type": "application/json",
            "Authorization": token,
        },
        method: "GET",

    })
}