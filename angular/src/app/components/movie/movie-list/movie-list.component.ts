import { Component, OnInit } from '@angular/core';
import { Movie } from '../../../models/movie.model';
import { MovieService } from '../../../services/movie.service';
import { AuthService } from '../../../services/auth.service';
import { User } from '../../../models/user.model';

@Component({
selector: 'app-movie-list',
templateUrl: './movie-list.component.html',
styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {
movies: Movie[] = [];
user: User | null = null;

constructor(private movieService: MovieService, private authService: AuthService) { }

ngOnInit(): void {
this.movieService.getMovieList().subscribe((movies) => {
this.movies = movies;
});
this.authService.getCurrentUser().subscribe((user: User | null) => {
this.user = user;
});
}

}