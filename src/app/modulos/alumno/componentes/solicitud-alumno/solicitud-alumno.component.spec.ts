import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SolicitudAlumnoComponent } from './solicitud-alumno.component';

describe('SolicitudAlumnoComponent', () => {
  let component: SolicitudAlumnoComponent;
  let fixture: ComponentFixture<SolicitudAlumnoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SolicitudAlumnoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SolicitudAlumnoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
