import { TestBed } from '@angular/core/testing';

import { ServiceEquipmentsService } from './service-equipments.service';

describe('ServiceEquipmentsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ServiceEquipmentsService = TestBed.get(ServiceEquipmentsService);
    expect(service).toBeTruthy();
  });
});
