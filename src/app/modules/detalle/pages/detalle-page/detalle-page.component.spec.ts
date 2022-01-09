import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetallePageComponent } from './detalle-page.component';

describe('DetallePageComponent', () => {
  let component: DetallePageComponent;
  let fixture: ComponentFixture<DetallePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetallePageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetallePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
