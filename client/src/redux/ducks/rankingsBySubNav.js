export const CATEGORY = "CATEGORY"
export const TABLE = "TABLE"

export const changeCategory = payload => ({ type: CATEGORY, payload })
export const changeTable = payload => ({ type: TABLE, payload })


const initialState = {
  component: CATEGORY,
  state: {}
}

export default (state = initialState, { type, payload }) => {
  switch (type) {

    case CATEGORY:
      return { component: CATEGORY, state: payload }
    case TABLE:
      return { component: TABLE, state: payload }

    default:
      return state
  }
}

//rankingsBySubNav
