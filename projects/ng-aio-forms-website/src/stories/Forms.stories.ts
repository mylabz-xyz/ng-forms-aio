// Button.stories.ts

import { Validators } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { Meta, moduleMetadata, Story } from '@storybook/angular';
import { NgAioForms } from 'projects/ng-aio-forms/src/lib/models/NgAioForms';
import { NgAioFormsModule } from 'projects/ng-aio-forms/src/lib/ng-aio-forms.module';

import { NgAioFormsComponent } from './../../../ng-aio-forms/src/lib/ng-aio-forms.component';

export default {
  title: 'NgAioForms',
  decorators: [
    moduleMetadata({
      imports: [BrowserModule,NgAioFormsModule],
    }),
  ],
} as Meta;


const template = `
<ng-aio-forms
[opts]="{debug: true}"
[forms]="forms"
></ng-aio-forms>`

const opts = {debug: false};
const forms:NgAioForms =  [
  {
    label: 'Ceci est un input',
    type: 'text',
    component:'input',
    value: '',
    onChange: (e: any) => {
      console.log(e);
      console.log('input');
    },
  },
  {
    label: 'Ceci est un input',
    type: 'text',
    component:'input',
    value: '',
    onChange: (e: any) => {
      console.log(e);
      console.log('input');
    },
  },
  {
    label: 'Ceci est un input obligatoire',
    type: 'text',
    component:'input',
    value: '',
    onChange: (e: any) => {
      console.log(e);
      console.log('input');
    },
    validator: Validators.required,
  },
  {
    label: 'Ceci est un input',
    type: 'text',
    component:'input',
    value: '',
    onChange: (e: any) => {
      console.log(e);
      console.log('input');
    },
  },
  {
    label: 'Ceci est un select',
    component: 'select',
    value: '',
    values: [
      { label: 'choix 0', value: 0 },
      { label: 'choix 1', value: 1 },
    ],
    onChange: (e: any) => {
      console.log(e);
      console.log('select');
    },
  },
  {
    label: 'Ceci est un select',
    component: 'select',
    value: '',
    values: [
      { label: 'choix 0', value: 0 },
      { label: 'choix 1', value: 1 },
    ],
    onChange: (e: any) => {
      console.log(e);
      console.log('select');
    },
  },
  {
    label: 'Ceci est un checkbox',
    component: 'checkbox',
    value: '',
    values: [
      { label: 'choix 0', value: 0 },
      { label: 'choix 1', value: 1 },
    ],
    onChange: (e: any) => {
      console.log(e);
      console.log('checkbox');
    },
  },
];

export const BasicForms: Story<NgAioFormsComponent> = (args) => {
console.log(args)

  return ({
    props: {
      ...args
    },
    template
  })
};


BasicForms.bind({})


BasicForms.args = {
  forms:forms,
  ...opts
}
