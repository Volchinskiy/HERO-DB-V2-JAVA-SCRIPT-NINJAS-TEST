import { all, fork } from 'redux-saga/effects';
import { sagaHeroWatcher } from './watcher/heroWatcher';
import { SagaIterator } from 'redux-saga';

export default function* rootSaga(): SagaIterator {
  yield all([fork(sagaHeroWatcher)]);
}
