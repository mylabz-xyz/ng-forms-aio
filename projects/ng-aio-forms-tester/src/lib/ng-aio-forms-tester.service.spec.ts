import { TestBed } from '@angular/core/testing';

import { NgAioFormsTesterService } from './ng-aio-forms-tester.service';

describe('NgAioFormsTesterService', () => {
  let service: NgAioFormsTesterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgAioFormsTesterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
