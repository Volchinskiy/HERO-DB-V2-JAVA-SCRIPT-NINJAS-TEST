import {
  GET_HERO_REQUEST,
  ADD_HERO_REQUEST,
  UPDATE_HERO_REQUEST,
  DELETE_HERO_REQUEST,
  ADD_HERO_WITH_IMG_REQUEST,
  DELETE_IMG_REQUEST,
  ADD_IMG_REQUEST,
} from './../../constant';
import { takeEvery } from 'redux-saga/effects';
import { SagaIterator } from 'redux-saga';
import {
  getHeroWorker,
  updateHeroWorker,
  deleteHeroWorker,
  addHeroWorker,
  addHeroWithImgWorker,
  deleteImgWorker,
  addImgWorker,
} from './../worker/heroWorker';

export function* sagaHeroWatcher(): SagaIterator {
  yield takeEvery(GET_HERO_REQUEST, getHeroWorker);
  yield takeEvery(ADD_HERO_REQUEST, addHeroWorker);
  yield takeEvery(ADD_IMG_REQUEST, addImgWorker);
  yield takeEvery(ADD_HERO_WITH_IMG_REQUEST, addHeroWithImgWorker);
  yield takeEvery(UPDATE_HERO_REQUEST, updateHeroWorker);
  yield takeEvery(DELETE_HERO_REQUEST, deleteHeroWorker);
  yield takeEvery(DELETE_IMG_REQUEST, deleteImgWorker);
}
