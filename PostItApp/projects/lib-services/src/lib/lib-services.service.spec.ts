import { TestBed } from '@angular/core/testing';

import { LibServicesService } from './lib-services.service';

describe('LibServicesService', () => {
  let service: LibServicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LibServicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
