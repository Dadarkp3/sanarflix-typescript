/**
 * Action types
 */
export enum TeachersTypes {
  LOAD_REQUEST = '@teachers/LOAD_REQUEST',
  LOAD_SUCCCES = '@teachers/LOAD_SUCCCES',
  LOAD_FAILURE = '@teachers/LOAD_FAILURE'
}

/**
 * Data types
 */
export interface Teacher {
  id: number;
  nome: string;
  imagem: string;
}

/**
 * State type
 */
export interface TeachersState {
  readonly data: Teacher[];
  readonly loading: boolean;
  readonly error: boolean;
}
