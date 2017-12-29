import { put, call, takeLatest } from 'redux-saga/effects'
import { LOGIN_FETCH } from './types'
import { dataFetched, dataFetchFailed } from './actions'
import { getLogin } from './data'

export function* getLoginData(action) {
  try {
    const json = yield call(getLogin, action.payload)
    yield put(dataFetched(json))
  } catch (error) {
    yield put(dataFetchFailed(error))
  }
}

export function* watchGetLoginData() {
  yield takeLatest(LOGIN_FETCH, getLoginData)
}
