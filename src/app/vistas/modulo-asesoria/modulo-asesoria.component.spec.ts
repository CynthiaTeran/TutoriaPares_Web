import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModuloAsesoriaComponent } from './modulo-asesoria.component';

describe('ModuloAsesoriaComponent', () => {
  let component: ModuloAsesoriaComponent;
  let fixture: ComponentFixture<ModuloAsesoriaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModuloAsesoriaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModuloAsesoriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
