import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, Subject } from 'rxjs';
import { FacturaService } from 'src/app/services/factura.service';
import { MovimientoService } from 'src/app/services/movimiento.service';
import { UsuarioService } from 'src/app/services/usuario.service';
import * as Model from './../../../libs/models';
@Component({
  selector: 'app-home-kardex',
  templateUrl: './home-kardex.component.html',
  styleUrls: ['./home-kardex.component.scss'],
})
export class HomeKardexComponent implements OnInit {
  productoKardex: Model.ConsultarMovimientoRespuestaDto;
  proveedores: Observable<Model.UsuarioCreateRespuestaDto[]>;
  facturas: Observable<Model.ConsultarDetalleFacturaRespuestaDto[]>;
  detalles: Observable<Model.DetalleMovimientoDto[]> = this.movimientoService.detallesMovimiento;

  existeMovimientoProducto: boolean = false;
  existeFacturaMovimientoProducto: boolean = false;

  productoId: number;
  movimientoId: number;
  constructor(
    private readonly movimientoService: MovimientoService,
    private activatedRute: ActivatedRoute,
    private readonly usuarioService: UsuarioService,
    private readonly facturaService: FacturaService
  ) {}

  ngOnInit(): void {
    this.activatedRute.params.subscribe((param) => {
      if (param.idProducto) {
        this.productoId = Number(param.idProducto);
        this.buscarfacturaIdProducto(this.productoId);
        this.movimientoService
          .buscarMovimientoPorIdProducto(this.productoId)
          .subscribe(
            (producto: Model.ConsultarMovimientoRespuestaDto) => {
              this.productoKardex = producto;

              if (this.productoKardex && this.productoKardex.idMovimiento) {

                this.movimientoId = this.productoKardex.idMovimiento;
                this.existeMovimientoProducto = true;
              } else {
                this.cargarProveedores();
              }
            },
            (error) => {
              if(error.status ==500){
                this.cargarProveedores();
              }
            }
          );
      }
    });
  }

  cargarProveedores() {
    this.proveedores = this.usuarioService.buscarListaProveedores();
  }

  crearMovimiento(movimiento: Model.CrearMovimientoPeticionDto){
    movimiento.productoId = this.productoId;
    this.movimientoService.crearMovimiento(movimiento).subscribe(mov => {
      if(mov){
        this.productoKardex = mov;
        this.existeMovimientoProducto = true;
      }
    });
  }

  buscarfacturaIdProducto(idProducto: number){

    this.facturas = this.facturaService.buscarFacturasPorIdProducto(idProducto);
  }

  crearDetalleMovimiento(detalle: Model.CrearDetalleMovimientoDto){
   detalle.idMovimiento = this.movimientoId;
   this.movimientoService.crearDetalleMovimiento(detalle).subscribe();
  }
}
