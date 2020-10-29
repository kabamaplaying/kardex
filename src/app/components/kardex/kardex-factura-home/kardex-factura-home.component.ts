import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { FacturaService } from 'src/app/services/factura.service';
import { MovimientoService } from 'src/app/services/movimiento.service';
import { ProductoService } from 'src/app/services/producto.service';
import { UsuarioService } from 'src/app/services/usuario.service';
import * as Model from './../../../libs/models';

@Component({
  selector: 'app-kardex-factura-home',
  templateUrl: './kardex-factura-home.component.html',
  styleUrls: ['./kardex-factura-home.component.scss']
})
export class KardexFacturaHomeComponent implements OnInit {

  facturas: Observable<Model.CrearFacturaRespuestaDto[]> = this.facturaService.listaFactura;
  facturasSubject = new Subject();
  proveedores: Observable<Model.UsuarioCreateRespuestaDto[]>;
  tipoMovimientos: Observable<Model.TipoMovimientoDto[]>;
  productos: Model.ProductoDto[];
  crearFacturaVisible: boolean = true;
  enableEnviarFactura: boolean;
  idProductoMovimiento: number = -1;
  facturaCrear: Observable<Model.CrearFacturaPeticionDto> = this.facturaService.facturaCrear;

  constructor(private readonly facturaService: FacturaService,
              private readonly usuarioService: UsuarioService,
              private readonly movimientoService: MovimientoService,
              private readonly productoService: ProductoService,
              private readonly activateRouter: ActivatedRoute) {

                this.activateRouter.params.subscribe(({idProductoMovimiento}) => {
                 if(idProductoMovimiento){
                   this.idProductoMovimiento = Number(idProductoMovimiento);
                 }
                });
              }


  ngOnInit(): void {
    this.cargarFacturas();
    this.  cargarProveedores();
    this.cargarTipoMovimientos();
    this.cargarProductos();
  }

  cargarFacturas(){
    this.facturaService.buscarFacturas().pipe(takeUntil(this.facturasSubject)).subscribe();
  }

  cargarProveedores() {
    this.proveedores = this.usuarioService.buscarListaProveedores();
  }
  cargarTipoMovimientos(){
    this.tipoMovimientos = this.movimientoService.buscarTipoMovimiento();
  }

  cargarProductos(){
    this.productoService.buscarProductos().subscribe(productos => {
      this.productos = productos;
      if(this.idProductoMovimiento !== -1){
        this.productos = this.productos.filter(producto => producto.id === this.idProductoMovimiento);
      }
    });
  }

  crearFacturaInicial(factura: Model.CrearFacturaPeticionDto){
   this.facturaService.agregarFacturaInicial(factura);
   this.crearFacturaVisible = false;
  }

  crearDetalleFacturaInicial(detalle: Model.CrearDetalleFacturaDto){
    this.facturaService.agregarDetalleFactura(detalle);
    this.crearFacturaVisible = false;
    this.enableEnviarFactura = this.facturaService.enviarCrearFactura;
   }

   guardarFactura(evt: number){
     this.facturaService.crearFactura(this.facturaService.facturaCrearCurrentValue()).subscribe(fact =>    this.crearFacturaVisible = true);
     this.enableEnviarFactura = this.facturaService.enviarCrearFactura;

   }

}
