import { Component, Input, OnInit } from '@angular/core';
import { Movie, User } from 'src/app/interfaces/interfaces';
import { AppService } from 'src/app/services/app.service';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {

  @Input() user: User

  movies: Movie[] = []

  constructor(private service: AppService) { }

  ngOnInit(): void {
    this.service.movies().subscribe(movies => this.movies = movies)
  }

}
