export interface CrearDetalleMovimientoDto{
  idFactura: number;
  idDetalleFactura: number;
  idMovimiento: number;
  tipoMovimientoId: number;
  fechaMovimiento: string;
  descripcion: string;
  valorUnitario: number;
  cantidad: number;
  valor: number;
}
