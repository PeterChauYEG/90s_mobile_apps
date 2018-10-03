// redux
import lyricGenerator, {
  initialState
} from '../lyricGenerator'
import ActionTypes from '../actionTypes'

describe('lyricGenerator Reducer', () => {  
  // it('should return the initial state', () => {
  //   const action = {
  //     type: 'undefined'
  //   }
  // 
  //   const result = lyricGenerator(undefined, action)
  //   const expected = initialState
  // 
  //   expect(result).toEqual(expected)
  // }) 
  // 
  // it('should return the initial state', () => {
  // 
  //   const result = lyricGenerator(undefined, {})
  //   const expected = initialState
  // 
  //   expect(result).toEqual(expected)
  // }) 
  
  it('should reduce the CLEAR_LYRICS action', () => {
    const action = {
      type: ActionTypes.CLEAR_LYRICS
    }
    
    const result = lyricGenerator(initialState, action)
    const expected = initialState
    
    expect(result).toEqual(expected)
  })
  
  it('should reduce the LYRIC_GENERATION_FAILURE action', () => {
    const action = {
      error: 'test',
      type: ActionTypes.LYRIC_GENERATION_FAILURE
    }
    
    const result = lyricGenerator(initialState, action)
    const expected = {
      ...initialState,
      error: 'test',
      isLoading: false
    }
    
    expect(result).toEqual(expected)
  })
  
  it('should reduce the LYRIC_GENERATION_REQUEST action', () => {
    const action = {
      nChars: 0,
      type: ActionTypes.LYRIC_GENERATION_REQUEST,
      sample: 'test'
    }
    
    const result = lyricGenerator(initialState, action)
    const expected = {
      ...initialState,
      isLoading: true,
      nChars: 0,
      sample: 'test'
    }
    
    expect(result).toEqual(expected)
  })
  
  it('should reduce the LYRIC_GENERATION_SUCCESS action', () => {
    const action = {
      lyrics: 'test',
      type: ActionTypes.LYRIC_GENERATION_SUCCESS
    }
    
    const result = lyricGenerator(initialState, action)
    const expected = {
      ...initialState,
      isLoading: false,
      lyrics: 'test'
    }
    
    expect(result).toEqual(expected)
  })
})