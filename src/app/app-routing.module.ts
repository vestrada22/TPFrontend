import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ValidateTokenGuard } from './guards/validate-token.guard';
import { LoginComponent } from './auth/login/login.component';
import { MovieComponent } from './pages/movie/movie.component';
import { TvshowComponent } from './pages/tvshow/tvshow.component';
import { HomeComponent } from './pages/home/home.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'home', component: HomeComponent, canActivate: [ValidateTokenGuard] },
  { path: 'movies', component: MovieComponent, canActivate: [ValidateTokenGuard] },
  { path: 'tvshows', component: TvshowComponent, canActivate: [ValidateTokenGuard] },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
