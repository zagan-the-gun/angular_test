import { TestBed } from '@angular/core/testing';

import { ServiceStudiosService } from './service-studios.service';

describe('ServiceStudiosService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ServiceStudiosService = TestBed.get(ServiceStudiosService);
    expect(service).toBeTruthy();
  });
});
