import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgAioSelectFormComponent } from './select.component';

describe('NgAioSelectFormComponent', () => {
  let component: NgAioSelectFormComponent;
  let fixture: ComponentFixture<NgAioSelectFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NgAioSelectFormComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgAioSelectFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
