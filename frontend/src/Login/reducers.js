import { handleActions } from 'redux-actions'
import { LOGIN_FETCHED, LOGIN_FORM_CHANGE } from './types'
const INITIAL_STATE = {
  logged: { token: '' },
  form: { email: '', password: '' }
}

const reducer = handleActions(
  {
    [LOGIN_FETCHED]: (state, action) => ({
      ...state,
      logged: action.payload.data
    }),
    [LOGIN_FORM_CHANGE]: (state, action) => ({
      ...state,
      form: {
        ...state.form,
        [action.payload.name]: action.payload.value
      }
    })
  },
  INITIAL_STATE
)

export default reducer
