import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, throwError } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { URL_API } from './../../environments/url-api';
import { httpOptions } from '../libs/const/http-config';
import * as Model from './../libs/models';

@Injectable({
  providedIn: 'root',
})
export class FacturaService {
  private readonly facturaCrear$ = new BehaviorSubject<
    Model.CrearFacturaPeticionDto
  >(null);
  facturaCrear = this.facturaCrear$.asObservable();


  private readonly listaFactura$ = new BehaviorSubject<
  Model.CrearFacturaRespuestaDto[]
>(null);
listaFactura = this.listaFactura$.asObservable();


  enviarCrearFactura: boolean = false;
  constructor(private http: HttpClient) {}

  agregarFacturaInicial(factura: Model.CrearFacturaPeticionDto) {
    this.facturaCrear$.next(factura);
  }

  agregarDetalleFactura(detalle: Model.CrearDetalleFacturaDto){
    this.facturaCrear$.value.detalles = [...this.facturaCrear$.value.detalles, detalle];
    this.facturaCrear$.next(this.facturaCrear$.value);
    this.enviarCrearFactura = this.facturaCrear$.value.detalles.length > 0;
  }

  facturaCrearCurrentValue() {
    return this.facturaCrear$.value;
  }
  buscarFacturasPorIdProducto(
    idProducto: number
  ): Observable<Model.ConsultarDetalleFacturaRespuestaDto[]> {
    return this.http
      .get<Model.ConsultarDetalleFacturaRespuestaDto[]>(
        `${URL_API.base}/factura/detalle/producto/${idProducto}`,
        httpOptions
      )
      .pipe(
        map(
          (facturas: Model.ConsultarDetalleFacturaRespuestaDto[]) => facturas
        ),
        catchError((err) => {
          console.log(err);
          throw new Error('Error');
        })
      );
  }

  crearFactura(
    factura: Model.CrearFacturaPeticionDto
  ): Observable<Model.CrearFacturaRespuestaDto> {
    return this.http
      .post<Model.CrearFacturaRespuestaDto>(
        `${URL_API.base}/factura/crear-factura`,
        JSON.stringify(factura),
        httpOptions
      )
      .pipe(
        tap(() => this.enviarCrearFactura = false),
        map((factura: Model.CrearFacturaRespuestaDto) => {
          this.listaFactura$.next([...this.listaFactura$.value, factura]);
          return factura;
        }),
        catchError((err) => {
          console.log(err);
          throw new Error('Error');
        })
      );
  }

  buscarFacturas(): Observable<Model.CrearFacturaRespuestaDto[]> {
    return this.http
      .get<Model.CrearFacturaRespuestaDto[]>(
        `${URL_API.base}/factura/consultar`,
        httpOptions
      )
      .pipe(
        map((facturas: Model.CrearFacturaRespuestaDto[]) => {
          this.listaFactura$.next([...facturas]);
          return facturas
        }),
        catchError((err) => {
          console.log(err);
          throw new Error('Error');
        })
      );
  }
}
