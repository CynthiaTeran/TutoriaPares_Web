import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgendaFormTutorComponent } from './agenda-form-tutor.component';

describe('AgendaFormTutorComponent', () => {
  let component: AgendaFormTutorComponent;
  let fixture: ComponentFixture<AgendaFormTutorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgendaFormTutorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AgendaFormTutorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
