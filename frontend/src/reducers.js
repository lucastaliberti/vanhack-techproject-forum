import { combineReducers } from 'redux'

import discussionReducer from './Discussion/reducers'
import loginReducer from './Login/reducers'

const rootReducer = combineReducers({
  discussion: discussionReducer,
  login: loginReducer
})

export default rootReducer
