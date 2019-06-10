import { TestBed } from '@angular/core/testing';

import { ServiceRequestService } from './service-request.service';

describe('ServiceRequestService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ServiceRequestService = TestBed.get(ServiceRequestService);
    expect(service).toBeTruthy();
  });
});
