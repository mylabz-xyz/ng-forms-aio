import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgAioInputFormComponent } from './input.component';

describe('NgAioInputFormComponent', () => {
  let component: NgAioInputFormComponent;
  let fixture: ComponentFixture<NgAioInputFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NgAioInputFormComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgAioInputFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
