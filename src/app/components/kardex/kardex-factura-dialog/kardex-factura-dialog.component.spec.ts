import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KardexFacturaDialogComponent } from './kardex-factura-dialog.component';

describe('KardexFacturaDialogComponent', () => {
  let component: KardexFacturaDialogComponent;
  let fixture: ComponentFixture<KardexFacturaDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KardexFacturaDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KardexFacturaDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
