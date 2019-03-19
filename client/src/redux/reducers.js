import { combineReducers } from 'redux'

import user from './ducks/auth'
import overallRankings from './ducks/overallRankings'

export default combineReducers({
    user,
    overallRankings
})