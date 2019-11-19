import { createStore, Store, applyMiddleware } from 'redux';

import createSagaMiddleware from 'redux-saga';
import { CoursesState } from './ducks/courses/types';

import rootReducer from './ducks/rootReducer';
import rootSaga from './ducks/rootSaga';
import { TeachersState } from './ducks/teachers/types';

const sagaMiddleware = createSagaMiddleware();

export interface ApplicationState {
  courses: CoursesState;
  teachers: TeachersState;
}

const store: Store<ApplicationState> = createStore(
  rootReducer,
  applyMiddleware(sagaMiddleware),
);

sagaMiddleware.run(rootSaga);

export default store;
