import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../store/store';
import { LoadMoviesAction, LoadSelectedMovieAction, FilterMoviesAction } from '../actions/movie.action';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  constructor(private store: Store<AppState>) { }

  getMovies(): void {
    this.store.dispatch(new LoadMoviesAction());
  }

  getMovieById(id: number): void {
    this.store.dispatch(new LoadSelectedMovieAction(id));
  }

  filterMovies(target: string, comparator: string, forceLowerCase: boolean = false): void {
    this.store.dispatch(new FilterMoviesAction({ target, comparator, forceLowerCase }));
  }
}
