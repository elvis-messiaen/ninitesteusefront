import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormulaireadminComponent } from './formulaireadmin.component';

describe('FormulaireadminComponent', () => {
  let component: FormulaireadminComponent;
  let fixture: ComponentFixture<FormulaireadminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormulaireadminComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormulaireadminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
