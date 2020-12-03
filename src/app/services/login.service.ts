import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { global } from './global';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  private url: string;
  public identity: string = '';
  public token: string = '';

  constructor(public _http: HttpClient) {
    this.url = global.url_stats;
  }

  public moodle_getToken(user, password) {
    let params = new HttpParams();
    params = params.append('username', user);
    params = params.append('password', password);
    params = params.append('service', 'moodle_mobile_app');
    return this._http.get(global.url_moodle + 'token.php/', { params: params });
  }

  public moodle_validartoken(): Observable<any> {
    let params = new HttpParams();
    params = params.append('wstoken', localStorage.getItem('token_moodle'));
    params = params.append('moodlewsrestformat', 'json');
    params = params.append('wsfunction', 'core_course_get_contents');
    params = params.append('courseid', '1');

    return this._http.get(global.url_moodle + '/webservice/rest/server.php/', {
      params: params,
    });
  }

}
