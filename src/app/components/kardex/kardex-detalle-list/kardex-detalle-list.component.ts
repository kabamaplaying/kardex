import { ChangeDetectionStrategy, Component, Input, OnChanges, OnInit, SimpleChange, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Observable } from 'rxjs';
import * as Model from './../../../libs/models';

@Component({
  selector: 'app-kardex-detalle-list',
  templateUrl: './kardex-detalle-list.component.html',
  styleUrls: ['./kardex-detalle-list.component.scss']
})
export class KardexDetalleListComponent implements OnInit {
  @Input() detalles: Observable<Model.DetalleMovimientoDto[]>;
  dataSource: MatTableDataSource<Model.DetalleMovimientoDto> = new MatTableDataSource<Model.DetalleMovimientoDto>() ;
  displayedColumns: string[] = [
    'fecha',
    'detalle',
    'cante',
    'costoue',
    'costote',
    'cants',
    'costous',
    'costots',
    'cantidadsaldo',
    'costosaldo',
  ];

  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor() { }

  ngOnInit(): void {
    this.detalles.subscribe(data => this.dataSource =  new MatTableDataSource<Model.DetalleMovimientoDto>(data)) ;
  }
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }


}
