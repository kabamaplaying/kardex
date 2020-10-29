import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { URL_API } from 'src/environments/url-api';
import { httpOptions } from '../libs/const/http-config';
import * as Model from './../libs/models';
@Injectable({
  providedIn: 'root',
})
export class ProductoService {
  constructor(private http: HttpClient) {}

  buscarProductos(): Observable<Model.ProductoDto[]> {
    console.log('ingrasando servicio')
    return this.http
      .get<Model.ProductoDto[]>(`${URL_API.base}/productos`);
  }

  buscarProductosPorId(id: number): Observable<Model.ProductoDto> {
    return this.http
      .get<Model.ProductoDto>(
        `${URL_API.base}/productos/${id}`,
        httpOptions
      )
      .pipe(map((productos: Model.ProductoDto) => productos));
  }

  buscarProductosPorMarca(marca: string): Observable<Model.ProductoDto[]> {
    return this.http
      .get<Model.ProductoDto[]>(
        `${URL_API.base}/productos/marca/${marca}`,
        httpOptions
      )
      .pipe(map((productos: Model.ProductoDto[]) => productos));
  }

  buscarProductosPorNombre(nombre: string): Observable<Model.ProductoDto[]> {
    return this.http
      .get<Model.ProductoDto[]>(
        `${URL_API.base}/productos/nombre/${nombre}`,
        httpOptions
      )
      .pipe(map((productos: Model.ProductoDto[]) => productos));
  }

  buscarProductosPorCodigo(codigo: string): Observable<Model.ProductoDto[]> {
    return this.http
      .get<Model.ProductoDto[]>(
        `${URL_API.base}/productos/codigo/${codigo}`,
        httpOptions
      )
      .pipe(map((productos: Model.ProductoDto[]) => productos));
  }
}
