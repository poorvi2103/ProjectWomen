import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StepRegistartionComponent } from './step-registartion.component';

describe('StepRegistartionComponent', () => {
  let component: StepRegistartionComponent;
  let fixture: ComponentFixture<StepRegistartionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StepRegistartionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StepRegistartionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
