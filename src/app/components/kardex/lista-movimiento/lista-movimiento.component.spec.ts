import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaMovimientoComponent } from './lista-movimiento.component';

describe('ListaMovimientoComponent', () => {
  let component: ListaMovimientoComponent;
  let fixture: ComponentFixture<ListaMovimientoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaMovimientoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaMovimientoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
