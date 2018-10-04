/**
 *
 * @format
 * @flow
 */

import ActionTypes from './actionTypes'

// initial state of this reducer
export const initialState = {
  error: undefined,
  isLoading: false,
  lyrics: undefined,
  nChars: 50,
  sample: 'sweet dreams are made of '
}

// lyrics generator reducer which handles any actions related to lyric
// generation
const lyricGenerator = (state = initialState, action) => {
  switch (action.type) {
    // when the lyrics should be cleared
    case ActionTypes.CLEAR_LYRICS:
      return initialState

    // when there is a failure, set loading to false, and set the error
    case ActionTypes.LYRIC_GENERATION_FAILURE:
      const { error } = action
      return {
        ...state,
        error,
        isLoading: false
      }

    // when there is a request, set loading to true, and set the params that
    // were passed in
    case ActionTypes.LYRIC_GENERATION_REQUEST:
      const { nChars, sample } = action
      return {
        ...state,
        error: undefined,
        isLoading: true,
        nChars,
        sample
      }

    // when there is a success, set loading to false, and set the lyrics
    case ActionTypes.LYRIC_GENERATION_SUCCESS:
      const { lyrics } = action
      return {
        ...state,
        error: undefined,
        isLoading: false,
        lyrics
      }
    default:
      return state
  }
}

export default lyricGenerator
