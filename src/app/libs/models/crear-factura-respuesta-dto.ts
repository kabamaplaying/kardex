import { ConsultarDetalleFacturaRespuestaDto } from './consultar-detalle-factura-respuesta.dto';

export interface CrearFacturaRespuestaDto {
  id: number;
  fechaCreacion: string;
  numeroFactura: string;
  nombreProveedor: string;
  idProveedor: number;
  idTipoMovimiento: number;
  nombreMovimiento: string;
  detalles: ConsultarDetalleFacturaRespuestaDto[];
}
