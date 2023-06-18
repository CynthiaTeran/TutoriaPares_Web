import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetallesFormAlumnoComponent } from './detalles-form-alumno.component';

describe('DetallesFormAlumnoComponent', () => {
  let component: DetallesFormAlumnoComponent;
  let fixture: ComponentFixture<DetallesFormAlumnoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetallesFormAlumnoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetallesFormAlumnoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
