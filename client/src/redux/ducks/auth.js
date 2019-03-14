import { takeLatest, call } from 'redux-saga/effects'

import { registerNewUserAPI } from '../../api/auth'

export const REGISTER_NEW_USER = 'REGISTER_NEW_USER'
export const ADD_NEW_USER = 'ADD_NEW_USER'

export const registerNewUser = (user) => ({type: REGISTER_NEW_USER, payload: user})

const initialState = {
    username: '',
    token: '',
    id: '',
    email: '',
    auth: false,
}

export default (state = initialState, { type, payload }) => {
  switch (type) {

  case 'typeName':
    return { ...state, ...payload }

  default:
    return state
  }
}

function* loginSaga() {
    yield console.log('err')
}


function* registerSaga(action){
  try {
    const user =  yield call(registerNewUserAPI, action.payload)
    console.log(user)
  } catch (error) {
    console.log(error)
  }
}

export function* userWatcher() {
    yield takeLatest('ddd', loginSaga)
    yield takeLatest('REGISTER_NEW_USER', registerSaga)
}
