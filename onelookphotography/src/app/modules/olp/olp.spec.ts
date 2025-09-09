import { TestBed } from '@angular/core/testing';

import { Olp } from './olp';

describe('Olp', () => {
  let service: Olp;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Olp);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
