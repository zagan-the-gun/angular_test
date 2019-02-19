import { TestBed } from '@angular/core/testing';

import { ServiceClassEquipmentsService } from './service-class-equipments.service';

describe('ServiceClassEquipmentsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ServiceClassEquipmentsService = TestBed.get(ServiceClassEquipmentsService);
    expect(service).toBeTruthy();
  });
});
