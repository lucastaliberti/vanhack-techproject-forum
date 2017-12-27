import { combineReducers } from 'redux'

import discussionReducer from './Discussion/reducers'

const rootReducer = combineReducers({
  discussion: discussionReducer
})

export default rootReducer
