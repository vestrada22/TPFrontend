import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { AuthResponse, Movie, MoviesResponse, TvShow, TvShowsResponse, User } from '../interfaces/interfaces';
import { catchError, map, tap } from 'rxjs/operators';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  private baseUrl: string = environment.baseUrl
  private _user: User;

  constructor(private http: HttpClient) { }

  get userData() {
    return { ...this._user };
  }

  login(email: string, password: string) {
    const url = `${this.baseUrl}/auth`
    const body = { email, password }
    return this.http.post<AuthResponse>(url, body)
      .pipe(
        tap(resp => {
          if (resp.ok)
            localStorage.setItem('token', resp.token)
        }),
        map(resp => resp.ok),
        catchError(err => of(err.error.message))
      )
  }

  movies(): Observable<Movie[]> {
    const url = `${this.baseUrl}/movies`
    return this.http.get<MoviesResponse>(url).pipe(map(resp => resp.results))
  }

  tvShows(): Observable<TvShow[]> {
    const url = `${this.baseUrl}/tvshows`
    return this.http.get<TvShowsResponse>(url).pipe(map(resp => resp.results))
  }

  tokenValidation(): Observable<boolean> {
    const url = `${this.baseUrl}/auth/renew`
    const headers = new HttpHeaders().set('x-token', localStorage.getItem('token') || '')
    return this.http.get<AuthResponse>(url, { headers })
    .pipe(
      map(resp => {
        localStorage.setItem('token', resp.token)
        this._user = {
          name: resp.name,
          uid: resp.uid,
          role: resp.role
        }
        return resp.ok
      }),
      catchError(err => of(false))
    )
  }

  logout() {
    localStorage.clear()
  }

}
