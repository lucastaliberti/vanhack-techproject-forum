import { all } from 'redux-saga/effects'

import { watchGetGroupedDiscussions } from './Discussion/sagas'

export default function* rootSaga() {
  yield all([watchGetGroupedDiscussions()])
}
