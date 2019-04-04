import { takeLatest, call, select, put } from 'redux-saga/effects'
import { uploadFileAPI, getFilesAPI, convertFileAPI } from '../../api/fileUplaod'
import { signOut } from './userD'
import { errorMessage } from './alerts'

const UPLOAD_FILE = 'UPLOAD_FILE'
const GET_FILES = "GET_FILES"
const ADD_LIST = "ADD_LIST"
const CONVERT_FILE = "CONVERT_FILE"

export const convertFile = (id) => ({ type: CONVERT_FILE, payload: id })
export const uploadFile = (data) => ({ type: UPLOAD_FILE, payload: data })
export const getFiles = () => ({ type: GET_FILES })
export const addList = (payload) => ({ type: ADD_LIST, payload })


export default (state = [], { type, payload }) => {
    switch (type) {
        case ADD_LIST: return payload
        default: return state
    }
}

function* convertFileWorker({ type, payload }) {
    try {
        const store = yield select()
        const token = `Bearer ${store.user.token}`
        const req = yield call(convertFileAPI, payload, token)
        const res = yield req.json()
        if (res.type === 'success') {
            yield put(getFiles())
        }
    } catch (error) {

    }
}


function* uploadFileWorker({ type, payload }) {
    try {
        const store = yield select()
        const token = `Bearer ${store.user.token}`
        const req = yield call(uploadFileAPI, payload, token)
        const res = yield req.json()
    } catch (error) {

    }
}
function* getFilesWorker({ type }) {
    try {
        const store = yield select()
        const token = `Bearer ${store.user.token}`
        const req = yield call(getFilesAPI, token)
        if (req.status === 401) {
            yield put(signOut())
        } else {
            const res = yield req.json()
            if (res.type === "success") {
                const action = yield call(addList, res.data)
                yield put(action)
            } else {
                yield put(errorMessage(res.message))
            }
        }
        // console.log(res)
    } catch (error) {
        const so = yield call(signOut)
        yield put(so)
    }
}

export function* uploadWatcher() {
    yield takeLatest(UPLOAD_FILE, uploadFileWorker)
    yield takeLatest(GET_FILES, getFilesWorker)
    yield takeLatest(CONVERT_FILE, convertFileWorker)
}