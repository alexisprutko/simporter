import data from '../../testData/rankingsData'
const initialState = data

export default (state = initialState, { type, payload }) => {
  switch (type) {

  case "typeName":
    return { ...state, ...payload }

  default:
    return state
  }
}
