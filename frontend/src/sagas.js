import { all } from 'redux-saga/effects'

import { watchGetGroupedDiscussions } from './Discussion/sagas'
import { watchGetLoginData } from './Login/sagas'

export default function* rootSaga() {
  yield all([watchGetGroupedDiscussions(), watchGetLoginData()])
}
