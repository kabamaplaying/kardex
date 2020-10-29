import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KardexFacturaHomeComponent } from './kardex-factura-home.component';

describe('KardexFacturaHomeComponent', () => {
  let component: KardexFacturaHomeComponent;
  let fixture: ComponentFixture<KardexFacturaHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KardexFacturaHomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KardexFacturaHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
