import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgoAfloginComponent } from './ngo-aflogin.component';

describe('NgoAfloginComponent', () => {
  let component: NgoAfloginComponent;
  let fixture: ComponentFixture<NgoAfloginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgoAfloginComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NgoAfloginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
