import { combineReducers } from 'redux'

import user from './ducks/userD'
import alert from './ducks/alerts'
import files from './ducks/fileUploader'

export default combineReducers({
    user,
    alert,
    files,
})