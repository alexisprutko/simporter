import { combineReducers } from 'redux'

import user from './ducks/auth'
import overallRankings from './ducks/overallRankings'
import productCardCondition from './ducks/productCardCondition'
import rankingsBySubNav from './ducks/rankingsBySubNav'
import alert from './ducks//alerts'

export default combineReducers({
    user,
    overallRankings,
    productCardCondition,
    rankingsBySubNav,   
    alert
})