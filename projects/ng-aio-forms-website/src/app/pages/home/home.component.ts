import { Component } from '@angular/core';
import { Validators } from '@angular/forms';
import { NgAioForms } from 'projects/ng-aio-forms/src/lib/models/NgAioForms';
import { AbstractWithForm } from '../../abstract';
import { AnimatedFormProvider, AnimatedIcon } from './../../providers';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  public previewTypescript = `
  // Create a form
  public introForm: NgAioForms = [
    {
      label: 'Ceci est un input',
      component: 'input',
      value: '',
    },
    {
      label: 'Ceci est un input',
      component: 'text-area',
      value: '',
    },
  ];
  `;

  public previewTemplate = `
  // Call ngAioForms, pass form to it and listen for change
  <ng-aio-forms
  [forms]="forms"
  (onChange)="onFormChange($event)"
  ></ng-aio-forms>

  // That it !`;
  public introForm: NgAioForms = [
    {
      label: 'Ceci est un input',
      component: 'input',
      value: '',
    },
    {
      label: 'Ceci est un input',
      component: 'input',
      value: '',
      required: true,
    },
    {
      label: 'Ceci est un input',
      component: 'text-area',
      value: '',
      formControlFeedBack: {
        required: 'is required',
        pattern: 'need to respect pattern',
      },
    },
  ];

  public submitForm: NgAioForms = [
    {
      label: 'This input is required',
      component: 'input',
      value: '',
      required: true,
      onChange: (value) => {
        console.log(value);
      },
    },
    {
      label: 'This checkbox is optional',
      component: 'checkbox',
      values: [
        { value: 1, label: 'Option 1' },
        { value: 2, label: 'Option 2' },
      ],
      value: '',
    },
  ];

  constructor(private animatedForm: AnimatedFormProvider) {}
}
