import { ComponentFixture, fakeAsync, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule, By } from '@angular/platform-browser';

import { NgFormsAioComponent } from './ng-forms-aio.component';

import {
  emptyForm,
  simpleForm,
  submitForm,
  invalidForm,
  complexeForm,
} from './../test/index';

describe('NgFormsAioComponent', () => {
  let component: NgFormsAioComponent;
  let fixture: ComponentFixture<NgFormsAioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NgFormsAioComponent],
      imports: [BrowserModule, ReactiveFormsModule],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgFormsAioComponent);
    component = fixture.componentInstance;
    component.opts = { debug: false };
    component.forms = [
      {
        label: 'This input is required',
        component: 'input',
        value: '',
        required: true,
      },
      {
        label: 'This checkbox is optional',
        component: 'checkbox-list',
        values: [
          { value: 1, label: 'Option 1' },
          { value: 2, label: 'Option 2' },
        ],
      },
    ];
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
    component.ngOnInit();
    component.onCreate.subscribe((formCreated) => {
      expect(formCreated).toEqual({
        input: {
          value: [],
          values: [],
          label: '*This input is required',
          component: 'input',
          id: 'input',
          col: 'float-left d-flex flex-col col-12',
          required: true,
          eventId: 'onInputChange',
        },
        'checkbox-list': {
          value: [],
          values: [
            {
              value: 1,
              label: 'Option 1',
            },
            {
              value: 2,
              label: 'Option 2',
            },
          ],
          label: 'This checkbox is optional',
          component: 'checkbox-list',
          id: 'checkbox-list',
          col: 'float-left d-flex flex-col col-12',
          required: false,
          eventId: 'onCheckbox-listChange',
          onChange: false,
        },
      });
    });
  });

  it('Should emit submit function', fakeAsync(() => {}));
});
