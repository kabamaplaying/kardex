import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeKardexComponent } from './home-kardex/home-kardex.component';
import { CrearMovimientoComponent } from './crear-movimiento/crear-movimiento.component';
import { ListaMovimientoComponent } from './lista-movimiento/lista-movimiento.component';

import { BuscarComponent } from './productos/buscar/buscar.component';

import { ProductosHomeComponent } from './productos/productos-home/productos-home.component';
import { DetalleMovimientoComponent } from './detalle-movimiento/detalle-movimiento.component';
import { RouterModule } from '@angular/router';

import { MaterialModule } from '../shared/material/material.module';
import { ProductosListaComponent } from './productos/productos-lista/productos-lista.component';
import { KardexDetalleListComponent } from './kardex-detalle-list/kardex-detalle-list.component';
import { KardexFacturaDialogComponent } from './kardex-factura-dialog/kardex-factura-dialog.component';
import { KardexFacturaHomeComponent } from './kardex-factura-home/kardex-factura-home.component';
import { KardexFacturaFormComponent } from './kardex-factura-form/kardex-factura-form.component';
import { KardexFacturaListaComponent } from './kardex-factura-lista/kardex-factura-lista.component';
import { KardexFacturaDetalleComponent } from './kardex-factura-detalle/kardex-factura-detalle.component';
import { KardexFacturaCrearDetalleComponent } from './kardex-factura-crear-detalle/kardex-factura-crear-detalle.component';

@NgModule({
  declarations: [
    HomeKardexComponent,
    CrearMovimientoComponent,
    ListaMovimientoComponent,
    BuscarComponent,
    ProductosHomeComponent,
    DetalleMovimientoComponent,
    ProductosListaComponent,
    KardexDetalleListComponent,
    KardexFacturaDialogComponent,
    KardexFacturaHomeComponent,
    KardexFacturaFormComponent,
    KardexFacturaListaComponent,
    KardexFacturaDetalleComponent,
    KardexFacturaCrearDetalleComponent,
  ],
  imports: [CommonModule, RouterModule, MaterialModule],
  entryComponents: [KardexFacturaDialogComponent]
})
export class KardexModule {}
