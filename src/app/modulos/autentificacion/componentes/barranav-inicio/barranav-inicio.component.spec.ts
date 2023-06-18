import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BarranavInicioComponent } from './barranav-inicio.component';

describe('BarranavInicioComponent', () => {
  let component: BarranavInicioComponent;
  let fixture: ComponentFixture<BarranavInicioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BarranavInicioComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BarranavInicioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
