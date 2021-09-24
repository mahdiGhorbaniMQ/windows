import { TestBed } from '@angular/core/testing';

import { StartItemsInformationService } from './start-items-information.service';

describe('StartItemsInformationService', () => {
  let service: StartItemsInformationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StartItemsInformationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
