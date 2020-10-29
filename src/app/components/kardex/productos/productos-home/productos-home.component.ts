import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { ProductoService } from 'src/app/services/producto.service';
import * as Model from './../../../../libs/models';
@Component({
  selector: 'app-productos-home',
  templateUrl: './productos-home.component.html',
  styleUrls: ['./productos-home.component.scss']
})
export class ProductosHomeComponent implements OnInit, OnDestroy{

  listaProductos: Observable<Model.ProductoDto[]>;
  listaProductosSubject = new Subject();
  constructor(private productoService: ProductoService, private readonly router: Router) { }

  ngOnInit(): void {
    //this.productoService.buscarProductos()
  this.cargarPorductos();
  //
  }

  cargarPorductos(){
    this.listaProductos = this.productoService.buscarProductos().pipe(takeUntil(this.listaProductosSubject));
  }

  crearKardexInput(producto: string) {
    this.router.navigate(['/kardex/', producto]);
  }
  ngOnDestroy(): void {
    this.listaProductosSubject.next();
    this.listaProductosSubject.complete();
  }

}
