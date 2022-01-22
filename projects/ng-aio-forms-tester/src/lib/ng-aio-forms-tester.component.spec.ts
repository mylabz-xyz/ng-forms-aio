import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgAioFormsTesterComponent } from './ng-aio-forms-tester.component';

describe('NgAioFormsTesterComponent', () => {
  let component: NgAioFormsTesterComponent;
  let fixture: ComponentFixture<NgAioFormsTesterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgAioFormsTesterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgAioFormsTesterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
