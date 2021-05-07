import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentsModule } from '../components/components.module';
import { MaterialModule } from '../material/material.module';


import { MovieComponent } from './movie/movie.component';
import { TvshowComponent } from './tvshow/tvshow.component';
import { HomeComponent } from './home/home.component';



@NgModule({
  declarations: [
    MovieComponent,
    TvshowComponent,
    HomeComponent
  ],
  imports: [
    CommonModule,
    ComponentsModule,
    MaterialModule
  ]
})
export class PagesModule { }
