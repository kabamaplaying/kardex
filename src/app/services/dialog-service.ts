import { Injectable } from '@angular/core';
import {
  MatDialog,
  MatDialogConfig,
  MatDialogRef,
} from '@angular/material/dialog';
import { KardexFacturaDialogComponent } from './../components/kardex/kardex-factura-dialog/kardex-factura-dialog.component';
import * as Model from './../libs/models';
import { BehaviorSubject, Observable } from 'rxjs';
import { map, take } from 'rxjs/operators';
@Injectable({ providedIn: 'root' })
export class DialogService {


  private respuestaUsuario: BehaviorSubject<any> = new BehaviorSubject(null);
  dialogRef: MatDialogRef<any>;



  constructor(public dialog: MatDialog) {}

  abrirDialog(data: Model.DataDialog<any>) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    this.dialogRef = this.dialog.open(KardexFacturaDialogComponent, { data });
  }

  confirmarDialog(): Observable<any> {
    return this.dialogRef.afterClosed().pipe(
      take(1),
      map((dialogResult) => {
        if (dialogResult) {
          const resultado = dialogResult as Model.DataDialog<any>;
          this.respuestaUsuario.next(resultado);
          return resultado;
        }
      })
    );
  }

  limpiarRespuestaUsuario() {
    this.respuestaUsuario.next(null);
  }

  get respuestaUsuario$() {
    return this.respuestaUsuario.asObservable();
  }
}
