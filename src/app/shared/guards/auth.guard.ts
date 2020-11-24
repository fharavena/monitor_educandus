import { Injectable } from '@angular/core';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  UrlTree,
  Router,
} from '@angular/router';
import { Observable } from 'rxjs';
import { NeveraccessService } from 'src/app/services/neveraccess.service';
import { map, take } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(
    private _router: Router,
    private _neveraccess: NeveraccessService
  ) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    if (!localStorage.getItem('token')) {
      this._router.navigate(['login']);
      return false;
    }

    return this._neveraccess.validartoken().pipe(
      take(1),
      map((isAuthenticated) => {
        if (isAuthenticated['status'] == 'success') {
          return true;
        } else {
          this._router.navigate(['login']);
          return false;
        }
      })
    );
  }
}
