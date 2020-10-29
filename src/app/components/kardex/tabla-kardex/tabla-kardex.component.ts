import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tabla-kardex',
  templateUrl: './tabla-kardex.component.html',
  styleUrls: ['./tabla-kardex.component.scss']
})
export class TablaKardexComponent implements OnInit {
  displayedColumns: string[] = ['fecha', 'detalle','entrada', 'salida', 'saldo'];

  constructor() { }

  ngOnInit(): void {
  }

}
