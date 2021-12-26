import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarddescriptifComponent } from './carddescriptif.component';

describe('CarddescriptifComponent', () => {
  let component: CarddescriptifComponent;
  let fixture: ComponentFixture<CarddescriptifComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarddescriptifComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CarddescriptifComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
