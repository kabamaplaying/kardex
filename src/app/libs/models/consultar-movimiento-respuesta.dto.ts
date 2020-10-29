import { DetalleMovimientoDto } from './detalle-movimiento.dto';

export interface ConsultarMovimientoRespuestaDto {
  id: number;
  idMovimiento: number;
  idProducto: number;
  minimo: number;
  maximo: number;
  productoReferencia: string;
  productoLocalizacion: string;
  productoNombre: string;
  productoUnidades: string;
  proveedorNombre: string;
  detalles: DetalleMovimientoDto[];
}
