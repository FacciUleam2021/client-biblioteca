import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AditorialPageComponent } from './aditorial-page.component';

describe('AditorialPageComponent', () => {
  let component: AditorialPageComponent;
  let fixture: ComponentFixture<AditorialPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AditorialPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AditorialPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
