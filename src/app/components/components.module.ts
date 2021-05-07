import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MoviePosterGridComponent } from './movie-poster-grid/movie-poster-grid.component';
import { PipesModule } from '../pipes/pipes.module';
import { TvshowPosterGridComponent } from './tvshow-poster-grid/tvshow-poster-grid.component';


@NgModule({
  declarations: [
    MoviePosterGridComponent,
    TvshowPosterGridComponent
  ],
  imports: [
    CommonModule,
    PipesModule
  ],
  exports: [
    MoviePosterGridComponent,
    TvshowPosterGridComponent
  ]
})
export class ComponentsModule { }
