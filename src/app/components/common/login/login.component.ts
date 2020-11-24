import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { NeveraccessService } from 'src/app/services/neveraccess.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  public page_title: string;
  public status: string;
  public token;
  public identity;
  public user;
  public pass;
  public mensaje;

  constructor(
    private _router: Router,
    private _route: ActivatedRoute,
    private _neveraccess: NeveraccessService
  ) {}

  ngOnInit(): void {
  }

  onSubmit(form) {
    this._neveraccess
      .getToken(form['usuario'], form['password'])
      .subscribe((response) => {
        if (response['status'] == 'error') {
          this.mensaje = response['data'];
        } else if (response['status'] == 'success') {
          localStorage.setItem('token', response['data']);
          this._router.navigate(['/']);
        } else {
          console.log(response);
        }
      });
  }

}
