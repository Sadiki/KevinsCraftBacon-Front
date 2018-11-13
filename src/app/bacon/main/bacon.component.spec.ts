import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BaconComponent } from './bacon.component';

describe('BaconComponent', () => {
  let component: BaconComponent;
  let fixture: ComponentFixture<BaconComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BaconComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BaconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
