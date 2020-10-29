import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDatepickerInputEvent } from '@angular/material/datepicker';
import { Observable } from 'rxjs';
import * as Model from './../../../libs/models'

@Component({
  selector: 'app-kardex-factura-crear-detalle',
  templateUrl: './kardex-factura-crear-detalle.component.html',
  styleUrls: ['./kardex-factura-crear-detalle.component.scss']
})
export class KardexFacturaCrearDetalleComponent implements OnInit {


  @Input() productos$: Model.ProductoDto[];
  @Input() fechaFactura: string;
  @Input() enableEnviarFactura: boolean;

  @Output() saveDetallefacturaEvent = new EventEmitter<Model.CrearDetalleFacturaDto>();
  @Output() finalizarCrearFacturaEvent = new EventEmitter<number>();
  crearDetalleFacturaForm: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.crearDetalleFacturaForm = this.fb.group({
      product: ['', [Validators.required]],
      observaciones: [
        '',
        [
          Validators.required,
          Validators.minLength(6),
          Validators.maxLength(250),
        ],
      ],      cantidad: [1, [Validators.required]],
      valor: [1, [Validators.required]],
    });
  }

  get observaciones() {
    return this.crearDetalleFacturaForm.get('observaciones');
  }

  get cantidad() {
    return this.crearDetalleFacturaForm.get('cantidad');
  }
  get valor() {
    return this.crearDetalleFacturaForm.get('valor');
  }

  getObservacionesInputError() {
    if (this.observaciones.hasError('minLength')) {
      return 'El nombre debe tener mínimo 6 caracteres';
    }
    if (this.observaciones.hasError('maxLength')) {
      return 'El nombre debe tener máximo 250 caracteres';
    }
    if (this.observaciones.hasError('required')) {
      return 'El campo email es requerido.';
    }
  }
  getMinimoInputError() {
    if (this.cantidad.hasError('required')) {
      return 'El campo cantidad mínima es obligatorio.';
    }
  }

  getMaximoInputError() {
    if (this.valor.hasError('required')) {
      return 'El campo valor unitario es obligatorio.';
    }
  }

  get product() {
    return this.crearDetalleFacturaForm.get('product');
  }

  get tipoMovimiento() {
    return this.crearDetalleFacturaForm.get('tipoMovimiento');
  }


  getProductoInputError() {
    if (this.product.hasError('required')) {
      return 'El campo producto es obligatorio.';
    }
  }


  saveDetalleFactura() {
    if (this.crearDetalleFacturaForm.invalid) {
      return;
    }
     const valorTotal = this.cantidad.value * this.valor.value;

    let creaMovimiento: Model.CrearDetalleFacturaDto = {
    cantidad: this.cantidad.value,
    descripcion: this.observaciones.value,
    idProducto: this.product.value.id,
    valorUnitario: this.valor.value,
    valorTotal: valorTotal
    };

    this.saveDetallefacturaEvent.emit(creaMovimiento);
    this.crearDetalleFacturaForm.reset();
  }

  finalizarCrearFactura() {
    this.finalizarCrearFacturaEvent.emit(1);
  }

  seleccionarProducto(producto: Model.ProductoDto) {
    console.log(producto);
  }

  seleccionarFecha(event: MatDatepickerInputEvent<Date>) {
     console.log(event.value);
  }

}
