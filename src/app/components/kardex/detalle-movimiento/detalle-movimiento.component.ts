import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { DialogService } from './../../../services/dialog-service';
import * as Model from './../../../libs/models';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-detalle-movimiento',
  templateUrl: './detalle-movimiento.component.html',
  styleUrls: ['./detalle-movimiento.component.scss']
})
export class DetalleMovimientoComponent implements OnInit {

  @Input() productoKardex: Model.ConsultarMovimientoRespuestaDto;
  @Input() facturasProducto: Observable<Model.ConsultarDetalleFacturaRespuestaDto[]>;

  @Output() buscarfacturaIdProducto = new EventEmitter<number>();
  @Output() crearDetalleMovimientoEvent = new EventEmitter<number>();

  crearFactura:boolean = true;
  constructor(private dService: DialogService) { }

  ngOnInit(): void {
   this.crearFactura = this.productoKardex.detalles && this.productoKardex.detalles.length > 0;
  }

  abrirDialogoAsociarFactura(idProducto: number) {
    this.buscarfacturaIdProducto.emit(idProducto);
    this.facturasProducto.subscribe(facturas => {
      if(facturas){
        this.crearDataAbrirDialogo(facturas);
      }
    });
  }

  crearDataAbrirDialogo(facturas: Model.ConsultarDetalleFacturaRespuestaDto[]){
    const comiteDialog: Model.DataDialog<Model.ConsultarDetalleFacturaRespuestaDto[]> = {
      data: facturas,
      mensaje: 'Agregar factura a movimiento',
      tituloDialog: 'Agregar factura a movimiento',
      titleButton: 'Registrar'
    };

    this.dService.abrirDialog(comiteDialog);
    this.dService.confirmarDialog().subscribe(confirmacionDialogo => {
      if (confirmacionDialogo && confirmacionDialogo.confirmacion) {
        console.log(confirmacionDialogo, 'Datos del dialogo')
        this.crearDetalleMovimientoEvent.emit(confirmacionDialogo.detalle);
        this.dService.limpiarRespuestaUsuario();
      }
    });
  }

}
