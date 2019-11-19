import { combineReducers } from 'redux';

import courses from './courses';
import teachers from './teachers';

export default combineReducers({
  courses,
  teachers,
});
