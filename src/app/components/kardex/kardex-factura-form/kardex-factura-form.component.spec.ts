import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KardexFacturaFormComponent } from './kardex-factura-form.component';

describe('KardexFacturaFormComponent', () => {
  let component: KardexFacturaFormComponent;
  let fixture: ComponentFixture<KardexFacturaFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KardexFacturaFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KardexFacturaFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
