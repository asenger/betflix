import { Action } from '@ngrx/store';

export enum MovieActionTypes {
    LOAD_MOVIES = '[MOVIE] LOAD',
    LOAD_SELECTED_MOVIE = '[MOVIE] Load Selected',
    FILTER_MOVIES = '[MOVIE] Filter',
}

export class ActionEx implements Action {
    readonly type;
    payload: any;
}

export class LoadMoviesAction implements Action {
    readonly type = MovieActionTypes.LOAD_MOVIES;

    constructor() { }
}

export class LoadSelectedMovieAction implements ActionEx {
    readonly type = MovieActionTypes.LOAD_SELECTED_MOVIE;

    constructor(public payload: number) { }
}

export class FilterMoviesAction implements ActionEx {
    readonly type = MovieActionTypes.FILTER_MOVIES;

    constructor(public payload: { target: string, comparator: string, forceLowerCase: boolean }) { }
}
