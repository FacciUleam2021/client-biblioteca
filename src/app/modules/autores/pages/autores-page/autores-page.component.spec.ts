import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AutoresPageComponent } from './autores-page.component';

describe('AutoresPageComponent', () => {
  let component: AutoresPageComponent;
  let fixture: ComponentFixture<AutoresPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AutoresPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AutoresPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
