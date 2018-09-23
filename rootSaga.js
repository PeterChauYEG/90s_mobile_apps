import { takeLatest, all } from 'redux-saga/effects'
import { lyricGenerationRequest } from './actions'
import { lyricGenerationRequestSaga } from './lyricGeneratorSaga'

export default function* rootSaga () {
  yield all([
    takeLatest(lyricGenerationRequest, lyricGenerationRequestSaga)
  ])
}