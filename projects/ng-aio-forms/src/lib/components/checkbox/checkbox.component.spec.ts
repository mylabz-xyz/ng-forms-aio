import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgAioCheckboxFormComponent } from './checkbox.component';

describe('CheckboxComponent', () => {
  let component: NgAioCheckboxFormComponent;
  let fixture: ComponentFixture<NgAioCheckboxFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NgAioCheckboxFormComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgAioCheckboxFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
