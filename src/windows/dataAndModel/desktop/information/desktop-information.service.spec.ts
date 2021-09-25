import { TestBed } from '@angular/core/testing';

import { DesktopInformationService } from './desktop-information.service';

describe('DesktopInformationService', () => {
  let service: DesktopInformationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DesktopInformationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
