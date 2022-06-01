// Button.stories.ts

import { Validators } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { Meta, moduleMetadata, Story } from '@storybook/angular';
import { NgFormsAio } from 'projects/ng-forms-aio/src/lib/models/NgFormsAio';
import { NgFormsAioModule } from 'projects/ng-forms-aio/src/lib/ng-forms-aio.module';

import { NgFormsAioComponent } from './../../../ng-forms-aio/src/lib/ng-forms-aio.component';

export default {
  title: 'NgFormsAio',
  decorators: [
    moduleMetadata({
      imports: [BrowserModule,NgFormsAioModule],
    }),
  ],
} as Meta;


const template = `
<ng-forms-aio
[opts]="{debug: true}"
[forms]="forms"
></ng-forms-aio>`

const opts = {debug: false};
const forms:NgFormsAio =  [
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

export const BasicForms: Story<NgFormsAioComponent> = (args) => {
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
