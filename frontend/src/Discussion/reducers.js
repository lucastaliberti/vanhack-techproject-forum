import { handleActions } from 'redux-actions'
import { DISCUSSION_FETCHED } from './types'
const INITIAL_STATE = { grouped: [] }

const reducer = handleActions(
  {
    [DISCUSSION_FETCHED]: (state, action) => ({
      ...state,
      grouped: action.payload.data
    })
  },
  INITIAL_STATE
)

export default reducer
