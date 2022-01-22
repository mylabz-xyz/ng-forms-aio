import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgAioFormsComponent } from './ng-aio-forms.component';

describe('NgAioFormsComponent', () => {
  let component: NgAioFormsComponent;
  let fixture: ComponentFixture<NgAioFormsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgAioFormsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgAioFormsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
