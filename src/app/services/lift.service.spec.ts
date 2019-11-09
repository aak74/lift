import { TestBed } from '@angular/core/testing';

import { LiftService } from './lift.service';

describe('LiftService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LiftService = TestBed.get(LiftService);
    expect(service).toBeTruthy();
  });
});
