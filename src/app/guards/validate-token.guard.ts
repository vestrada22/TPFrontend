import { Injectable } from '@angular/core';
import { CanActivate, CanLoad, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { AppService } from '../services/app.service';

@Injectable({
  providedIn: 'root'
})
export class ValidateTokenGuard implements CanActivate, CanLoad {

  constructor(private service: AppService, private router: Router) { }

  canActivate(): Observable<boolean> | boolean {
    return this.service.tokenValidation()
      .pipe(
        tap(valid => {
          if (!valid) {
            this.router.navigateByUrl('/auth')
          }
        })
      );
  }
  canLoad(): Observable<boolean> | boolean {
    return this.service.tokenValidation()
      .pipe(
        tap(valid => {
          if (!valid) {
            this.router.navigateByUrl('/auth')
          }
        })
      );
  }
}
