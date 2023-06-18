import { TestBed } from '@angular/core/testing';

import { PermisoSesionGuard } from './permiso-sesion.guard';

describe('PermisoSesionGuard', () => {
  let guard: PermisoSesionGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(PermisoSesionGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
