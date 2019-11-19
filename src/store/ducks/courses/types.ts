/**
 * Action types
 */
export enum CoursesTypes {
  LOAD_REQUEST = '@courses/LOAD_REQUEST',
  LOAD_SUCCCES = '@courses/LOAD_SUCCCES',
  LOAD_FAILURE = '@courses/LOAD_FAILURE'
}

/**
 * Data types
 */
export interface Course {
  id: number;
  nome: string;
  imagem: string;
  area: string;
}

/**
 * State type
 */
export interface CoursesState {
  readonly data: Course[];
  readonly loading: boolean;
  readonly error: boolean;
}
