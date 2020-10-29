import { AfterViewInit, Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Observable } from 'rxjs';
import * as Model from './../../../../libs/models';

@Component({
  selector: 'app-productos-lista',
  templateUrl: './productos-lista.component.html',
  styleUrls: ['./productos-lista.component.scss'],
})
export class ProductosListaComponent implements OnInit, AfterViewInit {
  @Input() listaProductosInput: Observable<Model.ProductoDto[]>;
  @Output() crearKardexEvent = new EventEmitter<number>();
  dataSource: MatTableDataSource<Model.ProductoDto> = new MatTableDataSource<Model.ProductoDto>() ;
  displayedColumns: string[] = [
    'nombre',
    'descripcion',
    'codigo',
    'marca',
    'modelo',
    'acciones'
  ];
  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor() {}

  ngOnInit(): void {
    this.listaProductosInput.subscribe((data) => {
      this.dataSource = new MatTableDataSource<Model.ProductoDto>(data);
      this.dataSource.paginator = this.paginator;
    });
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  crearKardex(producto: number) {
   this.crearKardexEvent.emit(producto);
  }
}
