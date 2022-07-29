import { getAllHero, updateHero, deleteHero, addHero, addHeroWithImg, deleteImg, addImgService } from './../service/heroService';
import { setQueryData, networkError } from './../../action/networkAction';
import { actionI } from './../../../type/reduxType';
import { call, put } from 'redux-saga/effects';
import { SagaIterator } from 'redux-saga';

export function* getHeroWorker(): SagaIterator {
  try {
    const allHeroes = yield call(getAllHero);
    yield put(setQueryData(allHeroes));
  } catch (error) {
    put(networkError(error));
  }
}

export function* addHeroWorker(action: actionI): SagaIterator {
  try {
    const allHeroes = yield call(addHero, action.payload);
    yield put(setQueryData(allHeroes));
  } catch (error) {
    put(networkError(error));
  }
}

export function* addHeroWithImgWorker(action: actionI): SagaIterator {
  try {
    const allHeroes = yield call(addHeroWithImg, action.payload);
    yield put(setQueryData(allHeroes));
  } catch (error) {
    put(networkError(error));
  }
}

export function* updateHeroWorker(action: actionI): SagaIterator {
  try {
    const allHeroes = yield call(updateHero, action.payload);
    yield put(setQueryData(allHeroes));
  } catch (error) {
    put(networkError(error));
  }
}

export function* deleteHeroWorker(action: actionI): SagaIterator {
  try {
    const allHeroes = yield call(deleteHero, action.payload);
    yield put(setQueryData(allHeroes));
  } catch (error) {
    put(networkError(error));
  }
}

export function* addImgWorker(action: actionI): SagaIterator {
  try {
    const allHeroes = yield call(addImgService, action.payload);
    yield put(setQueryData(allHeroes));
  } catch (error) {
    put(networkError(error));
  }
}

export function* deleteImgWorker(action: actionI): SagaIterator {
  try {
    const allHeroes = yield call(deleteImg, action.payload);
    yield put(setQueryData(allHeroes));
  } catch (error) {
    put(networkError(error));
  }
}
