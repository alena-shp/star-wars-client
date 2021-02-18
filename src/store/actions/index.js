import {
  SEARCH_DATA_REQUEST,
  SEARCH_DATA_SUCCESS,
  SEARCH_DATA_FAILURE,
  SEARCH_DATA_CLEAR
} from 'store/types'

export const searchDataRequest = searchValue => ({
  type: SEARCH_DATA_REQUEST,
  payload: searchValue
})

export const searchDataSuccess = searchData => ({
  type: SEARCH_DATA_SUCCESS,
  payload: searchData
})

export const searchDataFailure = err => ({
  type: SEARCH_DATA_FAILURE,
  payload: err
})

export const searchDataClear = () => ({
  type: 'SEARCH_DATA_CLEAR'
})
