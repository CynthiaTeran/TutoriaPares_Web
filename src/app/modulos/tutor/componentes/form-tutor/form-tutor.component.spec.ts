import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormTutorComponent } from './form-tutor.component';

describe('FormTutorComponent', () => {
  let component: FormTutorComponent;
  let fixture: ComponentFixture<FormTutorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormTutorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormTutorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
