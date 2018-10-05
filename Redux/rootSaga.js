/**
 *
 * @format
 * @flow
 */

import { all, fork } from 'redux-saga/effects'
import type { Saga } from 'redux-saga'

// Saga
import lyricGeneratorSaga from './lyricGeneratorSaga'

export default function * rootSaga (): Saga<void> {
  yield all([fork(lyricGeneratorSaga)])
}
