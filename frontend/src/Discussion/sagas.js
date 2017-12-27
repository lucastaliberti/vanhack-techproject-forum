import { put, call, takeLatest } from 'redux-saga/effects'
import { DISCUSSION_FETCH } from './types'
import { dataFetched, dataFetchFailed } from './actions'
import { getGroupedData } from './data'

export function* getGroupedDiscussions() {
  try {
    const json = yield call(getGroupedData)
    yield put(dataFetched(json))
  } catch (error) {
    yield put(dataFetchFailed(error))
  }
}

export function* watchGetGroupedDiscussions() {
  yield takeLatest(DISCUSSION_FETCH, getGroupedDiscussions)
}
