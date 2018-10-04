/**
 *
 * @format
 * @flow
 */

import { all, fork } from 'redux-saga/effects'
import lyricGeneratorSaga from './lyricGeneratorSaga'

export default function * rootSaga () {
  yield all([fork(lyricGeneratorSaga)])
}
