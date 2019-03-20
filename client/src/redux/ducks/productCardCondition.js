export const SELECT_ITEM = 'productCardCondition/SELECT_ITEM'
export const CLEAR_ITEM = 'productCardCondition/CLEAR_ITEM'



const initialState = {
    active: false,
    data: {}
}

export const selectProduct = payload => ({ type: SELECT_ITEM, payload })
export const clearProduct = () => ({ type: CLEAR_ITEM })

export default (state = initialState, { type, payload }) => {
    switch (type) {

        case SELECT_ITEM: return { active: true, data: payload }
        case CLEAR_ITEM: return initialState

        default:
            return state
    }
}
