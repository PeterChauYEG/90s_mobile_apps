import { fork } from 'redux-saga/effects'
import lyricGeneratorSaga from './lyricGeneratorSaga'

export default function* rootSaga () {
  yield [
    fork(lyricGeneratorSaga)
  ]
}