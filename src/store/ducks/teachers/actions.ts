import { action } from 'typesafe-actions';
import { TeachersTypes, Teacher } from './types';

export const loadRequest = () => action(TeachersTypes.LOAD_REQUEST);

export const loadSuccess = (data: Teacher[]) => action(TeachersTypes.LOAD_SUCCCES, { data });

export const loadFailure = () => action(TeachersTypes.LOAD_FAILURE);
