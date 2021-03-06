import { call, put } from 'redux-saga/effects';
import api from '../../../services/api';

import { loadSuccess, loadFailure } from './actions';

export function* loadTeachers() {
  try {
    const response = yield call(api.get, 'professores');

    yield put(loadSuccess(response.data));
  } catch (err) {
    yield put(loadFailure());
  }
}
