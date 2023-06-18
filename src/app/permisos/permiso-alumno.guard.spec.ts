import { TestBed } from '@angular/core/testing';

import { PermisoAlumnoGuard } from './permiso-alumno.guard';

describe('PermisoAlumnoGuard', () => {
  let guard: PermisoAlumnoGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(PermisoAlumnoGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
