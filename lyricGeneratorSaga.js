import { call, put, select } from 'redux-saga/effects'
import { takeLatest } from 'redux-saga'

// actions
import { 
  lyricGenerationFailure, 
  lyricGenerationRequest,
  lyricGenerationSuccess 
} from './actions'

export function* lyricGenerationRequestSaga(action) {
  const { nChars, sample } = action

  // construct data object
  const data = {
    n_chars: nChars,
    sample
  }
    
  const result = yield call(APIRequest, data)
  
  if (result.ok) {
    yield put(lyricGenerationSuccess(result.lyrics))
  } else {
    yield put(lyricGenerationFailure('There was an issue generating lyrics'))
  }
}

const APIRequest = data => {
  return fetch('http://localhost:5000/api/model', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json; charset=utf-8'
    },
    body: JSON.stringify(data)
  })
    .then(response => response.json())
    .then(lyrics => {
      // handle success
      const result = {
        ok: true,
        lyrics
      }
      return result
    })
    .catch(error => {
      // handle failure
      const result = {
        ok: false,
        error: new Error('There was an issue when attempting to generate lyrics.')
      }
      
      return result
    })  
}

export default function* lyricGeneratorSaga() {
  yield* takeLatest('LYRIC_GENERATION_REQUEST', lyricGenerationRequestSaga)
}

