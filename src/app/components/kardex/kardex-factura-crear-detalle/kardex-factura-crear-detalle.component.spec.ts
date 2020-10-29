import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KardexFacturaCrearDetalleComponent } from './kardex-factura-crear-detalle.component';

describe('KardexFacturaCrearDetalleComponent', () => {
  let component: KardexFacturaCrearDetalleComponent;
  let fixture: ComponentFixture<KardexFacturaCrearDetalleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KardexFacturaCrearDetalleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KardexFacturaCrearDetalleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
