import { combineReducers } from 'redux'

import user from './ducks/userD'
import alert from './ducks/alerts'

export default combineReducers({
    user,
    alert,
})