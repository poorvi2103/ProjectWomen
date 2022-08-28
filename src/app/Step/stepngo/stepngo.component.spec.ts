import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StepngoComponent } from './stepngo.component';

describe('StepngoComponent', () => {
  let component: StepngoComponent;
  let fixture: ComponentFixture<StepngoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StepngoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StepngoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
