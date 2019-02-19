import { TestBed } from '@angular/core/testing';

import { ServiceUsersService } from './service-users.service';

describe('ServiceUsersService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ServiceUsersService = TestBed.get(ServiceUsersService);
    expect(service).toBeTruthy();
  });
});
