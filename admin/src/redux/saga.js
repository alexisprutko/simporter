import { all } from 'redux-saga/effects'
import { userWatcher } from './ducks/userD'
import { uploadWatcher } from './ducks/fileUploader'
 
export default function* rootSaga () {
    yield all([
        userWatcher(),
        uploadWatcher()
    ])
}