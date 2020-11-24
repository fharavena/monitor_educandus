import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  constructor(private _router: Router, private _route: ActivatedRoute) {}

  ngOnInit(): void {
  }

  logout_btn(){

    localStorage.removeItem('token');
        this._router.navigate(['login']);
  }

}
