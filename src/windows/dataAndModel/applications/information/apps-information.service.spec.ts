import { TestBed } from '@angular/core/testing';

import { AppsInformationService } from './apps-information.service';

describe('AppsInformationService', () => {
  let service: AppsInformationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AppsInformationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
