/**
 *
 * @format
 * @flow
 */
 
import ActionTypes from './actionTypes'

// types
type clearLyricsAction = {
  type: typeof ActionTypes.CLEAR_LYRICS
}

type lyricGenerationFailureAction = {
  type: typeof ActionTypes.LYRIC_GENERATION_FAILURE,
  error: string
}

type lyricGenerationRequestAction = {
  nChars: number,
  sample: string,
  type: typeof ActionTypes.LYRIC_GENERATION_REQUEST
}

type lyricGenerationSuccessAction = {
  lyrics: string,
  type: typeof ActionTypes.LYRIC_GENERATION_SUCCESS
}

export type Action = 
  | clearLyricsAction
  | lyricGenerationFailureAction
  | lyricGenerationRequestAction
  | lyricGenerationSuccessAction
  
// Action which fires when a the lyrics should be cleared.
export const clearLyrics = (): Action => ({
  type: ActionTypes.CLEAR_LYRICS
})

// Action which fires when a request for lyric generation fails
export const lyricGenerationFailure = (error: string): Action => ({
  error,
  type: ActionTypes.LYRIC_GENERATION_FAILURE
})

// Action which fires when a request for lyric generation is made
export const lyricGenerationRequest = (nChars: number, sample: string): Action => ({
  nChars,
  sample,
  type: ActionTypes.LYRIC_GENERATION_REQUEST
})

// Action which fires when a request for lyric generation succeeds
export const lyricGenerationSuccess = (lyrics: string): Action => ({
  lyrics,
  type: ActionTypes.LYRIC_GENERATION_SUCCESS
})