import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FinalizadasAlumnoComponent } from './finalizadas-alumno.component';

describe('FinalizadasAlumnoComponent', () => {
  let component: FinalizadasAlumnoComponent;
  let fixture: ComponentFixture<FinalizadasAlumnoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FinalizadasAlumnoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FinalizadasAlumnoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
