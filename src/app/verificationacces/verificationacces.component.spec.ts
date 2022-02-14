import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerificationaccesComponent } from './verificationacces.component';

describe('VerificationaccesComponent', () => {
  let component: VerificationaccesComponent;
  let fixture: ComponentFixture<VerificationaccesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VerificationaccesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VerificationaccesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
