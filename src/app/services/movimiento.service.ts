import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, throwError } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { URL_API } from './../../environments/url-api';
import { httpOptions } from '../libs/const/http-config';
import * as Model from './../libs/models';
import { NotificationService } from './log/notificationservice';

@Injectable({
  providedIn: 'root',
})
export class MovimientoService {
  private readonly detallesMovimiento$ = new BehaviorSubject<
    Model.DetalleMovimientoDto[]
  >([]);
  detallesMovimiento = this.detallesMovimiento$.asObservable();
  constructor(private http: HttpClient, private readonly notificationService: NotificationService) {}

  buscarMovimientoPorId(
    id: number
  ): Observable<Model.ConsultarMovimientoRespuestaDto> {
    return this.http
      .get<Model.ConsultarMovimientoRespuestaDto>(
        `${URL_API.base}/private/movimientos/consultar/${id}`,
        httpOptions
      )
      .pipe(
        map((movimiento: Model.ConsultarMovimientoRespuestaDto) => movimiento),
        catchError((err) => {
          console.log(err);
          throw new Error('Error');
        })
      );
  }

  buscarMovimientoPorIdProducto(
    idProducto: number
  ): Observable<Model.ConsultarMovimientoRespuestaDto> {
    return this.http
      .get<Model.ConsultarMovimientoRespuestaDto>(
        `${URL_API.base}/private/movimientos/consultar/producto/${idProducto}`,
        httpOptions
      )
      .pipe(
        map((movimiento: Model.ConsultarMovimientoRespuestaDto) => {
          if (movimiento) {
            this.detallesMovimiento$.next([
              ...movimiento.detalles,
            ]);
          }
          return movimiento;
        }),
        catchError((err) => {
          throw new Error('Error');
        })
      );
  }

  crearMovimiento(
    movimiento: Model.CrearMovimientoPeticionDto
  ): Observable<Model.ConsultarMovimientoRespuestaDto> {
    return this.http
      .post<Model.CrearMovimientoRespuestaDto>(
        `${URL_API.base}/private/movimientos/crear-movimiento/`,
        JSON.stringify(movimiento),
        httpOptions
      )
      .pipe(
        map((movimientoRespuesta: Model.CrearMovimientoRespuestaDto) =>
         ({
            id: movimientoRespuesta.id,
            detalles: [],
            idMovimiento: movimientoRespuesta.id,
            idProducto: movimiento.productoId,
            maximo: movimientoRespuesta.maximo,
            minimo: movimientoRespuesta.minimo,
            productoLocalizacion:movimientoRespuesta.productoLocalizacion,
            productoNombre:movimientoRespuesta.productoNombre,
            productoReferencia: movimientoRespuesta.productoReferencia,
            productoUnidades: movimientoRespuesta.productoUnidades,
            proveedorNombre: movimientoRespuesta.proveedorNombre
          })
        ),
        catchError((err) => {

          throw new Error(err);
        })
      );
  }

  crearDetalleMovimiento(
    detalle: Model.CrearDetalleMovimientoDto
  ): Observable<Model.DetalleMovimientoDto> {
    return this.http
      .put<Model.DetalleMovimientoDto>(
        `${URL_API.base}/private/movimientos/crear-detalle`,
        JSON.stringify(detalle),
        httpOptions
      )
      .pipe(
        map((movimiento: Model.DetalleMovimientoDto) => {
          if (movimiento) {
            this.detallesMovimiento$.next([
              ...this.detallesMovimiento$.value,
              movimiento,
            ]);
          }
          return movimiento;
        })
      );
  }



  buscarTipoMovimiento(

  ): Observable<Model.TipoMovimientoDto[]> {
    return this.http
      .get<Model.TipoMovimientoDto[]>(
        `${URL_API.base}/private/movimientos/consultar/tipo-movimiento`,
        httpOptions
      )
      .pipe(
        map((movimiento: Model.TipoMovimientoDto[]) => movimiento)
      );
  }

  handleError(error) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // client-side error
      errorMessage = `Error: ${error.error.message}`;
    } else {
      // server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
  }
}
