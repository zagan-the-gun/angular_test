import { TestBed } from '@angular/core/testing';

import { ServiceReservationsService } from './service-reservations.service';

describe('ServiceReservationsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ServiceReservationsService = TestBed.get(ServiceReservationsService);
    expect(service).toBeTruthy();
  });
});
