import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgAioSelectInputFormComponent } from './select-input.component';

describe('NgAioSelectInputFormComponent', () => {
  let component: NgAioSelectInputFormComponent;
  let fixture: ComponentFixture<NgAioSelectInputFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NgAioSelectInputFormComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgAioSelectInputFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
