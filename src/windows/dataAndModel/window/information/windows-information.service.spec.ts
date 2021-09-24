import { TestBed } from '@angular/core/testing';

import { WindowsInformationService } from './windows-information.service';

describe('WindowsInformationService', () => {
  let service: WindowsInformationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WindowsInformationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
