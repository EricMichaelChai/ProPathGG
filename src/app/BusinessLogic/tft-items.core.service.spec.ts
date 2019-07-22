import { TestBed } from '@angular/core/testing';

import { TftItems.CoreService } from './tft-items.core.service';

describe('TftItems.CoreService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TftItems.CoreService = TestBed.get(TftItems.CoreService);
    expect(service).toBeTruthy();
  });
});
