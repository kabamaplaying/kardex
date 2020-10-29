import { Component, HostListener, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import * as Model from './../../../libs/models';
@Component({
  selector: 'app-kardex-factura-dialog',
  templateUrl: './kardex-factura-dialog.component.html',
  styleUrls: ['./kardex-factura-dialog.component.scss'],
})
export class KardexFacturaDialogComponent implements OnInit {

  seleccionarFacturaForm: FormGroup;


  ngOnInit() {}


  constructor(
    @Inject(MAT_DIALOG_DATA) public dialogData: Model.DataDialog<any>,
    public dialogRef: MatDialogRef<KardexFacturaDialogComponent>,
    private fb: FormBuilder
  ) {

    this.seleccionarFacturaForm = this.fb.group({
       factura: ['', [Validators.required]],
    });
  }


  get factura() {
    return this.seleccionarFacturaForm.get('factura');
  }

  getFacturaInputError() {
    if (this.factura.hasError('required')) {
      return 'Selecciona una factura';
    }

  }

  seleccionarProveedor(proveedor: Model.UsuarioCreateRespuestaDto) {
   //No actions
  }



  public cancelarAccion() {
    const confirmacion = { ...this.dialogData, confirmacion: false };
    this.dialogRef.close(confirmacion);
  }
  public confirmarAccion() {
    if(this.seleccionarFacturaForm.invalid) {
      return;
    }

    let detalle: Model.CrearDetalleMovimientoDto = {
      idDetalleFactura:  this.factura.value.idDetalleFactura,
      idFactura: this.factura.value.idFactura,
      cantidad: this.factura.value.cantidad,
      descripcion: this.factura.value.detalleKardex,
      fechaMovimiento: this.factura.value.fechaMovimiento,
      idMovimiento: this.factura.value.idMovimiento,
      tipoMovimientoId: this.factura.value.tipoMovimientoId,
      valor: this.factura.value.valorUnitario,
      valorUnitario: this.factura.value.valorUnitario
    };

    const confirmacion = { detalle, confirmacion: true };
    this.dialogRef.close(confirmacion);
  }

  public close() {
    this.dialogRef.close();
  }

  @HostListener('keydown.esc')
  public onEsc() {
    this.close();
  }
}
