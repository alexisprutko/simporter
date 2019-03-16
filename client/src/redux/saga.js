
import { all } from 'redux-saga/effects'
import { userWatcher } from './ducks/auth'

export default function* rootSaga () {
    yield all([
        userWatcher(),
    ])
}