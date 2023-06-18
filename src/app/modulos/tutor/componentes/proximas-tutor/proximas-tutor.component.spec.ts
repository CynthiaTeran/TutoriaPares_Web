import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProximasTutorComponent } from './proximas-tutor.component';

describe('ProximasTutorComponent', () => {
  let component: ProximasTutorComponent;
  let fixture: ComponentFixture<ProximasTutorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProximasTutorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProximasTutorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
