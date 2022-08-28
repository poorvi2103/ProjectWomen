import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgoFundingNormsComponent } from './ngo-funding-norms.component';

describe('NgoFundingNormsComponent', () => {
  let component: NgoFundingNormsComponent;
  let fixture: ComponentFixture<NgoFundingNormsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgoFundingNormsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NgoFundingNormsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
