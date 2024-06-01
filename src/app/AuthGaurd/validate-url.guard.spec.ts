import { TestBed } from '@angular/core/testing';

import { ValidateURLGuard } from './validate-url.guard';

describe('ValidateURLGuard', () => {
  let guard: ValidateURLGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(ValidateURLGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
