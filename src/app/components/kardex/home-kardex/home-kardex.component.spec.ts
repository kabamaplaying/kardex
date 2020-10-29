import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeKardexComponent } from './home-kardex.component';

describe('HomeKardexComponent', () => {
  let component: HomeKardexComponent;
  let fixture: ComponentFixture<HomeKardexComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeKardexComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeKardexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
