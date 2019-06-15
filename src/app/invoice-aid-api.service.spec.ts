import { TestBed } from '@angular/core/testing';

import { InvoiceAidApiService } from './invoice-aid-api.service';

describe('InvoiceAidApiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: InvoiceAidApiService = TestBed.get(InvoiceAidApiService);
    expect(service).toBeTruthy();
  });
});
