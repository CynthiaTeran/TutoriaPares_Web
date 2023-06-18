import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModuloRespuestaComponent } from './modulo-respuesta.component';

describe('ModuloRespuestaComponent', () => {
  let component: ModuloRespuestaComponent;
  let fixture: ComponentFixture<ModuloRespuestaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModuloRespuestaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModuloRespuestaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
