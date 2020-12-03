import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  public status: string = '';

  public user;
  public pass;
  public mensaje;

  constructor(private _router: Router, private _login: LoginService) {}

  ngOnInit(): void {}

  onSubmit(form) {
    this._login
      .moodle_getToken(form['usuario'], form['password'])
      .subscribe((response) => {
        if (response['errorcode'] != 'invalidlogin') {
          localStorage.setItem('token_moodle', response['token']);
          this._router.navigate(['/inicio']);
        } else {
          this.mensaje = response['error'];
        }
      });
  }
}
