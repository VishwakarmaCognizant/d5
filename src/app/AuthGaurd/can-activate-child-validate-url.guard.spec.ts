import { TestBed } from '@angular/core/testing';

import { CanActivateChildValidateURLGuard } from './can-activate-child-validate-url.guard';

describe('CanActivateChildValidateURLGuard', () => {
  let guard: CanActivateChildValidateURLGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(CanActivateChildValidateURLGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
