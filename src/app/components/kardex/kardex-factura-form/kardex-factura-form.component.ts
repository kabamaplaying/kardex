import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDatepickerInputEvent } from '@angular/material/datepicker';
import { Observable } from 'rxjs';
import * as Model from './../../../libs/models';

@Component({
  selector: 'app-kardex-factura-form',
  templateUrl: './kardex-factura-form.component.html',
  styleUrls: ['./kardex-factura-form.component.scss'],
})
export class KardexFacturaFormComponent implements OnInit {
  @Input() proveedores$: Observable<Model.UsuarioCreateRespuestaDto[]>;
  @Input() tipoMovimiento$: Observable<Model.TipoMovimientoDto[]>;
  @Output() saveEvent = new EventEmitter<Model.CrearFacturaPeticionDto>();
  @Output() goBackEvent = new EventEmitter<number>();
  numeroFactura: string;
  crearFacturaForm: FormGroup;
  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.crearFacturaForm = this.fb.group({
      proveedor: ['', [Validators.required]],
      fecha: ['', [Validators.required]],
      tipoMovimiento: ['', [Validators.required]],
    });

    this.numeroFactura = this.getNumeroFactura();
  }

  get fecha() {
    return this.crearFacturaForm.get('fecha');
  }

  get proveedor() {
    return this.crearFacturaForm.get('proveedor');
  }

  get tipoMovimiento() {
    return this.crearFacturaForm.get('tipoMovimiento');
  }

  getFechaInputError() {
    if (this.fecha.hasError('required')) {
      return 'El campo fecha es obligatorio.';
    }
  }

  getProveedorInputError() {
    if (this.proveedor.hasError('required')) {
      return 'El campo proveedor es obligatorio.';
    }
  }

  getTipoMovimientoInputError() {
    if (this.tipoMovimiento.hasError('required')) {
      return 'El campo tipo de movimiento es obligatorio.';
    }
  }

  saveFactura() {
    if (this.crearFacturaForm.invalid) {
      return;
    }

    const fechaI = new Date();
    // adjust 0 before single digit date
    let date = ('0' + this.fecha.value.getDate()).slice(-2);
    // current month
    let month = ('0' + (this.fecha.value.getMonth() + 1)).slice(-2);
    // current year
    let year = this.fecha.value.getFullYear();
    let convertFecha = `${year}-${month}-${date}`;



    let creaFactura: Model.CrearFacturaPeticionDto = {
      detalles: [],
      fechaCreacion: convertFecha,
      idProveedor: this.proveedor.value.id,
      idTipoMovimiento: this.tipoMovimiento.value.id,
      numeroFactura: this.getNumeroFactura(),
    };

    this.saveEvent.emit(creaFactura);
    this.crearFacturaForm.reset();
  }

  goBack() {
    this.goBackEvent.emit(1);
  }

  seleccionarProveedor(proveedor: Model.UsuarioCreateRespuestaDto) {
    console.log(proveedor);
  }

  seleccionarFecha(event: MatDatepickerInputEvent<Date>) {
  }
  getNumeroFactura(){
    const fechaI = new Date();
    const numeroFactura = [fechaI.getFullYear(),fechaI.getDate().toString().slice(-2),(fechaI.getMonth() + 1).toString().slice(-2), fechaI.getHours().toString().slice(-2),
      fechaI.getMinutes().toString().slice(-2),
      fechaI.getSeconds().toString().slice(-2)].join('');
      return numeroFactura;
  }
}
