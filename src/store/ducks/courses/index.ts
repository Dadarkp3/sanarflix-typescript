import { Reducer } from 'redux';
import { CoursesState, CoursesTypes } from './types';

const INITIAL_STATE: CoursesState = {
  data: [],
  error: false,
  loading: false,
};

const reducer: Reducer<CoursesState> = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CoursesTypes.LOAD_REQUEST:
      return { ...state, loading: true };
    case CoursesTypes.LOAD_SUCCCES:
      return {
        ...state,
        loading: false,
        error: false,
        data: action.payload.data,
      };
    case CoursesTypes.LOAD_FAILURE:
      return {
        ...state,
        loading: false,
        error: true,
        data: [],
      };
    default:
      return state;
  }
};

export default reducer;
