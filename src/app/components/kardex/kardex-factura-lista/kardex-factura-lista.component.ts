import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Observable } from 'rxjs';
import * as Model from './../../../libs/models';
@Component({
  selector: 'app-kardex-factura-lista',
  templateUrl: './kardex-factura-lista.component.html',
  styleUrls: ['./kardex-factura-lista.component.scss'],
})
export class KardexFacturaListaComponent implements OnInit {
  @Input() facturas: Observable<Model.CrearFacturaRespuestaDto[]>;
  dataSource: MatTableDataSource<
    Model.CrearFacturaRespuestaDto
  > = new MatTableDataSource<Model.CrearFacturaRespuestaDto>();

  displayedColumns: string[] = [
    'fecha',
    'proveedor',
    'numero',
    'movimiento',
    'acciones',
  ];

  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor() {}

  ngOnInit(): void {
    this.facturas.subscribe(
      (data) =>
        (this.dataSource = new MatTableDataSource<
          Model.CrearFacturaRespuestaDto
        >(data))
    );
  }
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
}
