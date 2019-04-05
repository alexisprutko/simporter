import { put, call, takeLatest, select } from 'redux-saga/effects'
import { getDataForecast as getDataForecastAPI } from '../../api/forecast'
import { signOut } from './auth'

// import data from '../../testData/rankingsData'

const GET_DATA = 'overallRankings/GET_DATA'
const ADD_DATA = 'overallRankings/ADD_DATA'

export const getData = () => ({ type: GET_DATA })
export const addData = (data) => ({ type: ADD_DATA, payload: data })

function* getDataWorker({ type, payload }) {
  try {
    const store = yield select()
    let { token } = store.user
    token = `Bearer ${token}`
    const req = yield call(getDataForecastAPI, token)
    if (req.status === 401) {
      yield put(signOut())
    } else {
      const res = yield req.json()
      if (res.type === 'success') {
        yield put(addData(res.data))
      } else {
        console.log(res)
      }
    }

  } catch (error) {
    console.log(error)
  }
}

const initialState = []

export default (state = initialState, { type, payload }) => {
  switch (type) {

    case ADD_DATA: return payload.reverse()
    default:
      return state
  }
}


export function* overallRankingsWatcher() {
  yield takeLatest(GET_DATA, getDataWorker)
}