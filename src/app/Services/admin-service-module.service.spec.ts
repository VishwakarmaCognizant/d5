import { TestBed } from '@angular/core/testing';

import { AdminServiceModuleService } from './admin-service-module.service';

describe('AdminServiceModuleService', () => {
  let service: AdminServiceModuleService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AdminServiceModuleService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
