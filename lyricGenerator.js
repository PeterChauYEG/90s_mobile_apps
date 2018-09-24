// initial state of this reducer
const initialState = {
  error: null,
  isLoading: false,
  lyrics: null,
  nChars: 50,
  sample: 'sweet dreams are made of '
}

// lyrics generator reducer which handles any actions related to lyric 
// generation
const lyricGenerator = (state = initialState, action) => {
  switch (action.type) {
    // when there is a failure, set loading to false, and set the error
    case 'LYRIC_GENERATION_FAILURE':
      const { error } = action
      return {
        ...state,
        error,
        isLoading: false
      }
      
    // when there is a request, set loading to true, and set the params that
    // were passed in
    case 'LYRIC_GENERATION_REQUEST':
      const { nChars, sample } = action      
      return {
        ...state,
        isLoading: true,
        nChars,
        sample
      }
      
    // when there is a success, set loading to false, and set the lyrics
    case 'LYRIC_GENERATION_SUCCESS':
      const { lyrics } = action
      return {
        ...state,
        isLoading: false,
        lyrics
      }
    default:
      return state
  }
}

export default lyricGenerator
