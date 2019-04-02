const ERROR_MESSAGE = 'ERROR_MESSAGE'
const WARNING_MESSAGE = 'WARNING_MESSAGE'
const SUCCESS_MESSAGE = 'SUCCESS_MESSAGE'

const ClEAR_MESSAGE = 'ClEAR_MESSAGE'

export const errorMessage = (payload) => ({ type: ERROR_MESSAGE, payload })
export const warningMessage = (payload) => ({ type: WARNING_MESSAGE, payload })
export const successMessage = (payload) => ({ type: SUCCESS_MESSAGE, payload })
export const clearMessage = (payload) => ({ type: ClEAR_MESSAGE, payload })

const initialState = {
    active: false,
    type: 'error',
    message: ''
}

export default (state = initialState, { type, payload }) => {
    switch (type) {

        case ERROR_MESSAGE: return { type: 'error', message: payload, active: true }
        case WARNING_MESSAGE: return { type: 'warning', message: payload, active: true }
        case SUCCESS_MESSAGE: return { type: 'success', message: payload, active: true }
        case ClEAR_MESSAGE: return initialState
        default:
            return state
    }
}
