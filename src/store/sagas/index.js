import { takeEvery, put, call, all } from 'redux-saga/effects'
import axios from 'axios'
import { SEARCH_DATA_REQUEST } from 'store/types'
import { searchDataRequest, searchDataSuccess, searchDataFailure } from 'store/actions'
import swapiProvider from 'provider'

const providerApi = new swapiProvider()

export function* watchFetchStarWars() {
  yield takeEvery(SEARCH_DATA_REQUEST, fetchStarWarsAsync)
}

function* fetchStarWarsAsync(action) {
  try {
    const param = action.payload
    const [films, people, planets, species, starships, vehicles] = yield all([
      call(() => providerApi.getFilms(param)),
      call(() => providerApi.getPeople(param)),
      call(() => providerApi.getPlanets(param)),
      call(() => providerApi.getSpecies(param)),
      call(() => providerApi.getStarships(param)),
      call(() => providerApi.getVehicles(param))
    ])

    const data = { films, people, planets, species, starships, vehicles }
    yield put(searchDataSuccess(data))
  } catch (error) {
    yield put(searchDataFailure())
  }
}
