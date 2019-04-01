import { all } from 'redux-saga/effects'
import { userWatcher } from './ducks/userD'

export default function* rootSaga () {
    yield all([
        userWatcher(),
    ])
}