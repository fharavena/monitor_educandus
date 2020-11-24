import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { global } from './global';


@Injectable({
  providedIn: 'root'
})
export class NeveraccessService {
  private url: string;
  public identity: string ="";
  public token: string="";

  constructor(public _http: HttpClient) {
    this.url = global.url_stats;
  }

  public getToken(username:string, password:string) {
    return this._http.get(this.url + "login/"+username+"/"+password);
  }

  public validartoken(): Observable<any> {
    let token = localStorage.getItem("token");

    return this._http.get(this.url + "validacion/"+token);
  }

  public get_usuarios(): Observable<any>{
    return this._http.get(this.url + "never_access");
  }

  public get_usuario_detalle(rut:string): Observable<any>{
    return this._http.get(this.url + "never_access_detail/"+rut, {});
  }
}
