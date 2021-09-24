import { TestBed } from '@angular/core/testing';

import { WindowsAPIService } from './windows-api.service';

describe('WindowsAPIService', () => {
  let service: WindowsAPIService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WindowsAPIService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
