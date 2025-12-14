import { TestBed } from '@angular/core/testing';

import { OnbordingService } from './onbording.service';

describe('OnbordingService', () => {
  let service: OnbordingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OnbordingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
