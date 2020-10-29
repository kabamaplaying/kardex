import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import * as Model from './../../../libs/models';

@Component({
  selector: 'app-crear-movimiento',
  templateUrl: './crear-movimiento.component.html',
  styleUrls: ['./crear-movimiento.component.scss'],
})
export class CrearMovimientoComponent implements OnInit {
  @Input() proveedores$: Observable<Model.UsuarioCreateRespuestaDto[]>;

  @Output() saveEvent = new EventEmitter<Model.CrearMovimientoPeticionDto>();
  @Output() goBackEvent = new EventEmitter<number>();
  crearMovimientoForm: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.crearMovimientoForm = this.fb.group({
      observaciones: [
        '',
        [
          Validators.required,
          Validators.minLength(6),
          Validators.maxLength(250),
        ],
      ],
      minimo: [1, [Validators.required]],
      maximo: [1, [Validators.required]],
      proveedor: ['', [Validators.required]],
    });
  }

  get observaciones() {
    return this.crearMovimientoForm.get('observaciones');
  }

  get minimo() {
    return this.crearMovimientoForm.get('minimo');
  }
  get maximo() {
    return this.crearMovimientoForm.get('maximo');
  }

  get proveedor() {
    return this.crearMovimientoForm.get('proveedor');
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
    if (this.minimo.hasError('required')) {
      return 'El campo cantidad mínima es obligatorio.';
    }
  }

  getMaximoInputError() {
    if (this.maximo.hasError('required')) {
      return 'El campo número empleados es obligatorio.';
    }
  }

  getProveedorInputError() {
    if (this.proveedor.hasError('required')) {
      return 'El campo proveedor es obligatorio.';
    }
  }

  saveKardex() {
    if (this.crearMovimientoForm.invalid) {
      return;
    }

    let creaMovimiento: Model.CrearMovimientoPeticionDto = {
      observaciones: this.observaciones.value,
      minimo: this.minimo.value,
      maximo: this.maximo.value,
      productoId: 0,
      usuarioId: this.proveedor.value.id,
    };

    this.saveEvent.emit(creaMovimiento);
    this.crearMovimientoForm.reset();
  }



  seleccionarProveedor(proveedor: Model.UsuarioCreateRespuestaDto) {
    console.log(proveedor);
  }
}
