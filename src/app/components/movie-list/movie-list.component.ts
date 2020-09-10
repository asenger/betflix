import { Component, OnInit, OnDestroy } from '@angular/core';
import { MovieService } from 'src/app/services/movie.service';
import { Movie } from 'src/app/models/movie';
import { Store } from '@ngrx/store';
import { ActivatedRoute } from '@angular/router';
import { AppState } from 'src/app/store/store';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.scss']
})
export class MovieListComponent implements OnInit, OnDestroy {
  movieStateSubscription: Subscription;
  movies: Movie[];
  isLoading = true;
  search: string;

  constructor(
    private route: ActivatedRoute,
    private store: Store<AppState>,
    private movieService: MovieService,
  ) {
    this.movieStateSubscription = this.store.select('movieState', 'movies')
      .subscribe(movies => {
        this.movies = movies;
        this.isLoading = false;
      });
  }

  ngOnInit() {
    this.route.queryParams.subscribe((params) => {
      this.movieService.getMovies();
    });
  }

  filterByName(event: KeyboardEvent) {
    const input = (<HTMLInputElement>event.target).value;

    if (input) {
      this.movieService.filterMovies('name', input, true);
    } else {
      this.movieService.getMovies();
    }
  }

  ngOnDestroy(): void {
    this.movieStateSubscription.unsubscribe();
  }
}
