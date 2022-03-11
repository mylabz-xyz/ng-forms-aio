import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgAioInputTextBoxComponent } from './input-text-box.component';

describe('NgAioInputTextBoxComponent', () => {
  let component: NgAioInputTextBoxComponent;
  let fixture: ComponentFixture<NgAioInputTextBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NgAioInputTextBoxComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgAioInputTextBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
