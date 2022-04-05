import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgAioCheckboxListFormComponent } from './checkbox-list.component';

describe('CheckboxComponent', () => {
  let component: NgAioCheckboxListFormComponent;
  let fixture: ComponentFixture<NgAioCheckboxListFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NgAioCheckboxListFormComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgAioCheckboxListFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
