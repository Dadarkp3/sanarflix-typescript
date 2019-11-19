import { action } from 'typesafe-actions';
import { CoursesTypes, Course } from './types';

export const loadRequest = () => action(CoursesTypes.LOAD_REQUEST);

export const loadSuccess = (data: Course[]) => action(CoursesTypes.LOAD_SUCCCES, { data });

export const loadFailure = () => action(CoursesTypes.LOAD_FAILURE);
