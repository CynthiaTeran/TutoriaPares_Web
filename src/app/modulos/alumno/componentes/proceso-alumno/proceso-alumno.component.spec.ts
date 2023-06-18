import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProcesoAlumnoComponent } from './proceso-alumno.component';

describe('ProcesoAlumnoComponent', () => {
  let component: ProcesoAlumnoComponent;
  let fixture: ComponentFixture<ProcesoAlumnoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProcesoAlumnoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProcesoAlumnoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
