
import { all } from 'redux-saga/effects'
import { userWatcher } from './ducks/auth'
import { overallRankingsWatcher } from './ducks/overallRankings'

export default function* rootSaga () {
    yield all([
        userWatcher(),
        overallRankingsWatcher()
    ])
}