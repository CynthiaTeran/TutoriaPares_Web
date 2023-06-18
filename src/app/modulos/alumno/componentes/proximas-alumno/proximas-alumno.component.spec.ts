import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProximasAlumnoComponent } from './proximas-alumno.component';

describe('ProximasAlumnoComponent', () => {
  let component: ProximasAlumnoComponent;
  let fixture: ComponentFixture<ProximasAlumnoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProximasAlumnoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProximasAlumnoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
