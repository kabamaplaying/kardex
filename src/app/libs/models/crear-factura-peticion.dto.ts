import { CrearDetalleFacturaDto } from './crear-detalle-factura.dto';
export interface CrearFacturaPeticionDto{
  fechaCreacion: string;
  idProveedor: number;
  idTipoMovimiento: number;
  numeroFactura: string;
  detalles: CrearDetalleFacturaDto[];
 }
