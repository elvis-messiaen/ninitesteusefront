import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AproposdenousComponent } from './aproposdenous.component';

describe('AproposdenousComponent', () => {
  let component: AproposdenousComponent;
  let fixture: ComponentFixture<AproposdenousComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AproposdenousComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AproposdenousComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
