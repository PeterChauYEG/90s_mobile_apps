import ActionTypes from './actionTypes'

// Action which fires when a the lyrics should be cleared.
export const clearLyrics = () => ({
  type: ActionTypes.CLEAR_LYRICS
})

// Action which fires when a request for lyric generation fails
export const lyricGenerationFailure = error => ({
  error,
  type: ActionTypes.LYRIC_GENERATION_FAILURE
})

// Action which fires when a request for lyric generation is made
export const lyricGenerationRequest = (nChars, sample) => ({
  nChars,
  sample,
  type: ActionTypes.LYRIC_GENERATION_REQUEST
})

// Action which fires when a request for lyric generation succeeds
export const lyricGenerationSuccess = lyrics => ({
  lyrics,
  type: ActionTypes.LYRIC_GENERATION_SUCCESS
})
