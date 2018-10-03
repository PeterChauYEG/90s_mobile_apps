// redux
import lyricGeneratorSaga, { lyricGenerationRequestSaga } from '../lyricGeneratorSaga'
import { 
  lyricGenerationFailure,
  lyricGenerationSuccess
 } from '../actionCreators'
import ActionTypes from '../actionTypes'

import { call, put, takeLatest } from 'redux-saga/effects'
import sagaHelper from 'redux-saga-testing';

describe('lyricGenerator Saga', () => {
  const it = sagaHelper(lyricGeneratorSaga())    
  
  it('should take the LYRIC_GENERATION_REQUEST action', result => {  
    const expected = takeLatest(
      ActionTypes.LYRIC_GENERATION_REQUEST,
      lyricGenerationRequestSaga
    )
    
    expect(result).toEqual(expected)
  })
  
  it('should be nothing', result => {  
    const expected = undefined
    
    expect(result).toEqual(expected)
  })
})

describe('lyricGeneratorRequest Saga - failure', () => {
  const action = {
    nChars: 0,
    sample: 'test'
  } 
  const it = sagaHelper(lyricGenerationRequestSaga(action))    
    
  it('should take the call the API', result => {  
    const data = {
      n_chars: action.nChars,
      sample: action.sample.toLowerCase()
    }
    
    const APIRequest = () => {}
    
    const expected = call(APIRequest, data)
    
    expect(JSON.stringify(result)).toBe(JSON.stringify(expected))
    
    return {
      ok: false
    }
  })
  
  it('should put a failure', result => {  
    const expected = put(lyricGenerationFailure('There was an issue generating lyrics'))
    
    expect(result).toEqual(expected)
  }) 
  
  it('should be nothing', result => {  
    const expected = undefined

    expect(result).toEqual(expected)
  })   
})

describe('lyricGeneratorRequest Saga - success', () => {
  const action = {
    nChars: 0,
    sample: 'test'
  } 
  const it = sagaHelper(lyricGenerationRequestSaga(action))

  it('should take the call the API', result => {  
    const data = {
      n_chars: action.nChars,
      sample: action.sample.toLowerCase()
    }

    const APIRequest = () => {}

    const expected = call(APIRequest, data)

    expect(JSON.stringify(result)).toBe(JSON.stringify(expected))
    
    return {
      ok: true,
      lyrics: 'test'
    }
  })

  it('should put a success', result => {  
    const expected = put(lyricGenerationSuccess('test'))

    expect(result).toEqual(expected)
  })  
  
  it('should be nothing', result => {  
    const expected = undefined

    expect(result).toEqual(expected)
  })  
})