// Action which fires when a the lyrics should be cleared.
export const clearLyrics = () => ({
  type: 'CLEAR_LYRICS'
})

// Action which fires when a request for lyric generation fails
export const lyricGenerationFailure = error => ({
  type: 'LYRIC_GENERATION_FAILURE', error
})

// Action which fires when a request for lyric generation is made
export const lyricGenerationRequest = (nChars, sample) => ({
  type: 'LYRIC_GENERATION_REQUEST', nChars, sample
})

// Action which fires when a request for lyric generation succeeds
export const lyricGenerationSuccess = lyrics => ({
  type: 'LYRIC_GENERATION_SUCCESS', lyrics
})
