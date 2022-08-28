import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgocriteriaComponent } from './ngocriteria.component';

describe('NgocriteriaComponent', () => {
  let component: NgocriteriaComponent;
  let fixture: ComponentFixture<NgocriteriaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgocriteriaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NgocriteriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
