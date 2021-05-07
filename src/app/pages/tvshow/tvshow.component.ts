import { Component, Input, OnInit } from '@angular/core';
import { AppService } from 'src/app/services/app.service';
import { TvShow, User } from 'src/app/interfaces/interfaces';

@Component({
  selector: 'app-tvshow',
  templateUrl: './tvshow.component.html',
  styleUrls: ['./tvshow.component.css']
})
export class TvshowComponent implements OnInit {

  @Input() user: User

  tvshows: TvShow[] = []

  constructor(private service: AppService) { }

  ngOnInit(): void {
    this.service.tvShows().subscribe(tvshows => this.tvshows = tvshows)
    console.log(this.tvshows)
  }

}
