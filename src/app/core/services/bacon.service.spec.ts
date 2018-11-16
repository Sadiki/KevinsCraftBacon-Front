import { TestBed } from '@angular/core/testing';

import { BaconService } from './bacon.service';

describe('BaconService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BaconService = TestBed.get(BaconService);
    expect(service).toBeTruthy();
  });
});
