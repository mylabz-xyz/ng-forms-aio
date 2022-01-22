import { TestBed } from '@angular/core/testing';

import { NgAioFormsService } from './ng-aio-forms.service';

describe('NgAioFormsService', () => {
  let service: NgAioFormsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgAioFormsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
