import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgoorganisationComponent } from './ngoorganisation.component';

describe('NgoorganisationComponent', () => {
  let component: NgoorganisationComponent;
  let fixture: ComponentFixture<NgoorganisationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgoorganisationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NgoorganisationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
