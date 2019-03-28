import { takeLatest, call, put } from 'redux-saga/effects'

import { registerNewUserAPI, loginAPI } from '../../api/auth'

export const REGISTER_NEW_USER = 'REGISTER_NEW_USER'
export const ADD_NEW_USER = 'ADD_NEW_USER'
export const LOGIN_USER = 'LOGIN_USER'
export const SIGN_OUT = 'SIGN_OUT'

export const registerNewUser = (user) => ({ type: REGISTER_NEW_USER, payload: user })
export const loginUser = (payload) => ({ type: LOGIN_USER, payload })
export const addNewUser = (payload) => ({ type: ADD_NEW_USER, payload })
export const signOut = () => ({type:  SIGN_OUT})

const initialState = {
  username: '',
  token: '',
  id: '',
  email: '',
  auth: false,
}

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case ADD_NEW_USER:
      return { username:payload.user.firstName + " " + payload.user.lastName, id: payload.user.id, auth: true, token: payload.token }
    case SIGN_OUT: return initialState
    default:
      return state
  }
}

function* loginSaga({type, payload}) {
  try {
    const request = yield call(loginAPI,payload.data)
    const res = yield request.json()
    if(res.token){
      const action = yield call(addNewUser, res)
      console.log(payload)
       payload.push('/category')
      yield put(action)
    }else{
      console.log(res)
    }
  } catch (error) {
    console.log(error)
  }
}


function* registerSaga(action) {
  try {
    const user = yield call(registerNewUserAPI, action.payload)
    console.log(user)
  } catch (error) {
    console.log(error)
  }
}

export function* userWatcher() {
  yield takeLatest(LOGIN_USER, loginSaga)
  yield takeLatest('REGISTER_NEW_USER', registerSaga)
}
