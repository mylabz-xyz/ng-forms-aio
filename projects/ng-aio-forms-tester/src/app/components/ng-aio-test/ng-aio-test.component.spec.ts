import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgAioTestComponent } from './ng-aio-test.component';

describe('NgAioTestComponent', () => {
  let component: NgAioTestComponent;
  let fixture: ComponentFixture<NgAioTestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgAioTestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgAioTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
