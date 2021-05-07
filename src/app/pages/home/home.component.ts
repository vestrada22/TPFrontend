import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AppService } from 'src/app/services/app.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: [
  ]
})
export class HomeComponent {

  constructor(private service: AppService, private router: Router) { }

  get user() {
    return this.service.userData;
  }

  logout() {
    this.router.navigateByUrl('/auth');
    this.service.logout();
  }

}
