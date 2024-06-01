import { TestBed } from '@angular/core/testing';

import { UserServiceModuleService } from './user-service-module.service';

describe('UserServiceModuleService', () => {
  let service: UserServiceModuleService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserServiceModuleService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
