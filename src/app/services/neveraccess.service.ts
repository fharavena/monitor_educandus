import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { global } from './global';

@Injectable({
  providedIn: 'root'
})
export class NeveraccessService {
  private url: string;

  constructor(public _http: HttpClient) {
    this.url = global.url_stats;
  }

  public get_usuarios(): Observable<any>{
    return this._http.get(this.url + "never_access");
  }

  public get_usuarios_30(): Observable<any>{
    return this._http.get(this.url + "last_30_days");
  }

  public get_usuario_detalle(rut:string): Observable<any>{
    return this._http.get(this.url + "never_access_detail/"+rut, {});
  }
}
