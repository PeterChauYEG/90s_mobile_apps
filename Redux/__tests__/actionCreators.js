// redux
import { 
  clearLyrics,
  lyricGenerationFailure,
  lyricGenerationRequest,
  lyricGenerationSuccess
} from '../actionCreators'
import ActionTypes from '../actionTypes'

describe('ActionCreators', () => {
  it('should return an action for clearLyrics', () => {
    const action = clearLyrics()
    const expected = ({
      type: ActionTypes.CLEAR_LYRICS
    })
    
    expect(action).toEqual(expected)
  })
  
  it('should return an action for lyricGenerationFailure', () => {
    const action = lyricGenerationFailure('test')
    const expected = ({
      error: 'test',
      type: ActionTypes.LYRIC_GENERATION_FAILURE,
    })
    
    expect(action).toEqual(expected)
  })
  
  it('should return an action for lyricGenerationRequest', () => {
    const action = lyricGenerationRequest(0, 'test')
    const expected = ({
      nChars: 0,
      sample: 'test',
      type: ActionTypes.LYRIC_GENERATION_REQUEST,
    })
    
    expect(action).toEqual(expected)
  })
  
  it('should return an action for lyricGenerationSuccess', () => {
    const action = lyricGenerationSuccess('test')
    const expected = ({
      lyrics: 'test',
      type: ActionTypes.LYRIC_GENERATION_SUCCESS,
    })
    
    expect(action).toEqual(expected)
  })
})