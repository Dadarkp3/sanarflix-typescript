import { all, takeLatest } from 'redux-saga/effects';

import { CoursesTypes } from './courses/types';

import { TeachersTypes } from './teachers/types';
import { loadCourses } from './courses/sagas';
import { loadTeachers } from './teachers/sagas';

export default function* rootSaga() {
  return yield all([
    takeLatest(TeachersTypes.LOAD_REQUEST, loadTeachers),
    takeLatest(CoursesTypes.LOAD_REQUEST, loadCourses),
  ]);
}
