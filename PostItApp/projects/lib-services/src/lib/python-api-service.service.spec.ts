import { TestBed } from '@angular/core/testing';

import { PythonApiServiceService } from './python-api-service.service';

describe('PythonApiServiceService', () => {
  let service: PythonApiServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PythonApiServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
