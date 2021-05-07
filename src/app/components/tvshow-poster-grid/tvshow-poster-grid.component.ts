import { Component, Input, OnInit } from '@angular/core';
import { TvShow } from 'src/app/interfaces/interfaces';

@Component({
  selector: 'app-tvshow-poster-grid',
  templateUrl: './tvshow-poster-grid.component.html',
  styles: [
  ]
})
export class TvshowPosterGridComponent implements OnInit {

  @Input() tvshows: TvShow[] = []
  
  constructor() { }

  ngOnInit(): void {
  }

}
