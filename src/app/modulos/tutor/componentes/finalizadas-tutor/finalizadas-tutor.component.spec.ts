import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FinalizadasTutorComponent } from './finalizadas-tutor.component';

describe('FinalizadasTutorComponent', () => {
  let component: FinalizadasTutorComponent;
  let fixture: ComponentFixture<FinalizadasTutorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FinalizadasTutorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FinalizadasTutorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
