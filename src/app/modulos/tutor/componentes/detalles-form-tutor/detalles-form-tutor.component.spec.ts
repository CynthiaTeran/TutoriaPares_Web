import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetallesFormTutorComponent } from './detalles-form-tutor.component';

describe('DetallesFormTutorComponent', () => {
  let component: DetallesFormTutorComponent;
  let fixture: ComponentFixture<DetallesFormTutorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetallesFormTutorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetallesFormTutorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
