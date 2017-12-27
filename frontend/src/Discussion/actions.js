import { createAction } from 'redux-actions'
import {
  DISCUSSION_FETCH,
  DISCUSSION_FETCHED,
  DISCUSSION_FETCH_FAILED
} from './types'

export const dataFetch = createAction(DISCUSSION_FETCH)
export const dataFetched = createAction(DISCUSSION_FETCHED)
export const dataFetchFailed = createAction(DISCUSSION_FETCH_FAILED)
