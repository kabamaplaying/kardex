import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KardexFacturaDetalleComponent } from './kardex-factura-detalle.component';

describe('KardexFacturaDetalleComponent', () => {
  let component: KardexFacturaDetalleComponent;
  let fixture: ComponentFixture<KardexFacturaDetalleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KardexFacturaDetalleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KardexFacturaDetalleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
