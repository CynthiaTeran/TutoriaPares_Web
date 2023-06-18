import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BarranavPrincipalComponent } from './barranav-principal.component';

describe('BarranavPrincipalComponent', () => {
  let component: BarranavPrincipalComponent;
  let fixture: ComponentFixture<BarranavPrincipalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BarranavPrincipalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BarranavPrincipalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
