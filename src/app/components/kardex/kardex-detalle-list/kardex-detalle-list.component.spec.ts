import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KardexDetalleListComponent } from './kardex-detalle-list.component';

describe('KardexDetalleListComponent', () => {
  let component: KardexDetalleListComponent;
  let fixture: ComponentFixture<KardexDetalleListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KardexDetalleListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KardexDetalleListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
