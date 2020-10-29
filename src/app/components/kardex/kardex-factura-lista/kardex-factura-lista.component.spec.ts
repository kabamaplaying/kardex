import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KardexFacturaListaComponent } from './kardex-factura-lista.component';

describe('KardexFacturaListaComponent', () => {
  let component: KardexFacturaListaComponent;
  let fixture: ComponentFixture<KardexFacturaListaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KardexFacturaListaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KardexFacturaListaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
