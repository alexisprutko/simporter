import { takeLatest, call, put } from 'redux-saga/effects'
import { registerNewUserAPI, loginAPI, confirmEmail as confirmEmailAPI } from '../../api/auth'
import {
  errorMessage,
  // warningMessage, 
  // successMessage 
} from './alerts'

export const REGISTER_NEW_USER = 'REGISTER_NEW_USER'
export const ADD_NEW_USER = 'ADD_NEW_USER'
export const LOGIN_USER = 'LOGIN_USER'
export const SIGN_OUT = 'SIGN_OUT'
export const CONFIRM_EMAIL = 'CONFIRM_EMAIL'

export const confirmEmail = (payload) => ({ type: CONFIRM_EMAIL, payload })
export const registerNewUser = (user) => ({ type: REGISTER_NEW_USER, payload: user })
export const loginUser = (payload) => ({ type: LOGIN_USER, payload })
export const addNewUser = (payload) => ({ type: ADD_NEW_USER, payload })
export const signOut = () => ({ type: SIGN_OUT })

const initialState = {
  username: '',
  token: '',
  id: '',
  email: '',
  auth: false,
  confirm: true,
}

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case ADD_NEW_USER:
      return {
           username: payload.user.firstName + " " + payload.user.lastName, 
           id: payload.user.id, 
           auth: true, 
           token: payload.token , 
           confirm:payload.user.confirm
          }
    case SIGN_OUT: return initialState
    default:
      return state
  }
}

function* loginSaga({ payload }) {
  try {
    const request = yield call(loginAPI, payload.data)
    const res = yield request.json()
    if (res.token) {
      const action = yield call(addNewUser, res)
      payload.push('/category')
      yield put(action)
    } else {
      yield put(errorMessage(res.error.message))
    }
  } catch (error) {
    yield put(errorMessage(error.message))

  }
}

function* registerSaga({ payload }) {
  try {
    const user = yield call(registerNewUserAPI, payload.data)
    const res = yield user.json()
    if (res.token) {
      const action = yield call(addNewUser, res)
      payload.push('/category')
      yield put(action)
    } else {
      yield put(errorMessage(res.error.message))

    }
  } catch (error) {
    yield put(errorMessage(error.message))
  }
}

function* confirmEmailWorker({ type, payload }) {
  try {
    const req = yield call(confirmEmailAPI, payload.token)
    if(req.status === 200) payload.push('/')
  } catch (error) {

  }
}


export function* userWatcher() {
  yield takeLatest(LOGIN_USER, loginSaga)
  yield takeLatest(REGISTER_NEW_USER, registerSaga)
  yield takeLatest(CONFIRM_EMAIL, confirmEmailWorker)
}
