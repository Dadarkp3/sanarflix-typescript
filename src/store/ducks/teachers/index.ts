import { Reducer } from 'redux';
import { TeachersState, TeachersTypes } from './types';

const INITIAL_STATE: TeachersState = {
  data: [],
  error: false,
  loading: false,
};

const reducer: Reducer<TeachersState> = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case TeachersTypes.LOAD_REQUEST:
      return { ...state, loading: true };
    case TeachersTypes.LOAD_SUCCCES:
      return {
        ...state,
        loading: false,
        error: false,
        data: action.payload.data,
      };
    case TeachersTypes.LOAD_FAILURE:
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
