import { TestBed } from '@angular/core/testing';

import { ShortcutsInformationService } from './shortcuts-information.service';

describe('ShortcutsInformationService', () => {
  let service: ShortcutsInformationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ShortcutsInformationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
