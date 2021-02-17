import { SEARCH_DATA_REQUEST, SEARCH_DATA_SUCCESS, SEARCH_DATA_FAILURE } from 'store/types'

const initialState = {
  searchData: {},
  loading: false,
  err: ''
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SEARCH_DATA_REQUEST:
      return {
        ...state,
        loading: true
      }
    case SEARCH_DATA_SUCCESS:
      return {
        loading: false,
        searchData: action.payload,
        err: ''
      }
    case SEARCH_DATA_FAILURE:
      return {
        loading: false,
        searchData: {},
        err: action.payload
      }
    default:
      return state
  }
}

export default reducer
