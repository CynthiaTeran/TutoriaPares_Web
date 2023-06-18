import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProcesoTutorComponent } from './proceso-tutor.component';

describe('ProcesoTutorComponent', () => {
  let component: ProcesoTutorComponent;
  let fixture: ComponentFixture<ProcesoTutorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProcesoTutorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProcesoTutorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
