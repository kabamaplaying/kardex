import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { URL_API } from 'src/environments/url-api';
import { httpOptions } from '../libs/const/http-config';
import { ROLES } from '../libs/enum/roles.enum';
import * as Model from './../libs/models';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(private http: HttpClient) {}


  buscarListaProveedores(): Observable<Model.UsuarioCreateRespuestaDto[]> {
    return this.http
      .get<Model.UsuarioCreateRespuestaDto[]>(
        `${URL_API.base}/usuario/consultar/rol/${ROLES.PROVEEDOR}`,
        httpOptions
      )
      .pipe(tap(console.warn),map((proveedores: Model.UsuarioCreateRespuestaDto[]) => proveedores));
  }
}
