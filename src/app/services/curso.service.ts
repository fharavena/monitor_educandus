import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { global } from './global';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CursoService {
  constructor(public _http: HttpClient) {}

  public get_categorias_nivel1() {

    let params = new HttpParams();
    params = params.append('wstoken', localStorage.getItem('token_moodle'));
    params = params.append('moodlewsrestformat', 'json');
    params = params.append('wsfunction', 'core_course_get_categories');

    return this._http.get(global.url_moodle + '/webservice/rest/server.php/', { params: params });
  }

  public get_cursos_por_categoria(categoria_id) {

    let params = new HttpParams();
    params = params.append('wstoken', localStorage.getItem('token_moodle'));
    params = params.append('moodlewsrestformat', 'json');
    params = params.append('wsfunction', 'core_course_get_courses_by_field');
    params = params.append('field', 'category');
    params = params.append('value', categoria_id);

    return this._http.get(global.url_moodle + '/webservice/rest/server.php/', { params: params });
  }

  //ejemplo borrar despues
  public moodle_getToken(user, password) {
    let params = new HttpParams();
    params = params.append('username', user);
    params = params.append('password', password);
    params = params.append('service', 'moodle_mobile_app');
    return this._http.get(global.url_moodle + 'token.php/', { params: params });
  }
}
