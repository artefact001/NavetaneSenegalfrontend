import { TestBed } from '@angular/core/testing';

import { ResulatService } from './resulat.service';

describe('ResulatService', () => {
  let service: ResulatService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ResulatService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
