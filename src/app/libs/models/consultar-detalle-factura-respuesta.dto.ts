export interface ConsultarDetalleFacturaRespuestaDto{
  idFactura: number;
  idDetalleFactura: number;
  numeroFactura: string;
  idMovimiento: number;
  tipoMovimientoId: number;
  fechaMovimiento: string;
  descripcion: string;
  valorUnitario: number;
  cantidad: number;
  detalleKardex: string;
  fechaDetalleKardex: string;
}
