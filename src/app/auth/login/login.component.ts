import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AppService } from 'src/app/services/app.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  form: FormGroup = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(8)]]
  })

  constructor(private fb: FormBuilder, private router: Router, private service: AppService) { }

  login() {
    const { email, password } = this.form.value
    this.service.login(email, password).subscribe(resp => {
      if (resp === true) {
        this.router.navigateByUrl('/home')
      } else {
        Swal.fire('Error', resp, 'error')
      }
    })
  }

}
