import { createAction } from 'redux-actions'
import {
  LOGIN_FETCH,
  LOGIN_FETCHED,
  LOGIN_FETCH_FAILED,
  LOGIN_FORM_CHANGE
} from './types'

export const dataFetch = createAction(LOGIN_FETCH)
export const dataFetched = createAction(LOGIN_FETCHED)
export const dataFetchFailed = createAction(LOGIN_FETCH_FAILED)
export const formValueChanged = createAction(LOGIN_FORM_CHANGE)
