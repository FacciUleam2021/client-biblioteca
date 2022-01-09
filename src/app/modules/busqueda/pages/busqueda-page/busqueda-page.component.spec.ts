import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BusquedaPageComponent } from './busqueda-page.component';

describe('BusquedaPageComponent', () => {
  let component: BusquedaPageComponent;
  let fixture: ComponentFixture<BusquedaPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BusquedaPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BusquedaPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
