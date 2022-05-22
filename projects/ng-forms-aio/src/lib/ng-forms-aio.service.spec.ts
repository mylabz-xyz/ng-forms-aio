import { TestBed } from '@angular/core/testing';

import { NgFormsAioService } from './ng-forms-aio.service';

describe('NgFormsAioService', () => {
  let service: NgFormsAioService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgFormsAioService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
