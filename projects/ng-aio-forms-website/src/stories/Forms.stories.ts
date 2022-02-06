// Button.stories.ts

import { Meta, moduleMetadata, Story } from '@storybook/angular';
import { NgAioFormsModule } from 'projects/ng-aio-forms/src/lib/ng-aio-forms.module';

import { NgAioFormsComponent } from './../../../ng-aio-forms/src/lib/ng-aio-forms.component';

export default {
  title: 'NgAioForms',
  decorators: [
    moduleMetadata({
      imports: [NgAioFormsModule],
    }),
  ],
  argTypes:{
    forms: {
      control: "array",
      table: {
        category: "Props",
      },
    },
    opts: {
      control: "array",
      table: {
        category: "Props",
      },
    },
  },
} as Meta;


const template = `<ng-aio-forms
[opts]="{debug: false}"
[forms]="forms"
></ng-aio-forms>`

const opts = {debug: false};
const forms:any =  [
  {
    label: 'Username',
    type: 'input',
    value: '',
    onChange: (e: any) => {
      console.log(e);
      console.log('input');
    },
  },
  {
    label: 'Password',
    type: 'input',
    value: '',
    onChange: (e: any) => {
      console.log(e);
      console.log('input');
    },
  }]

export const BasicForms: Story<NgAioFormsComponent> = () => ({
  props: {
      forms,
  },
  template
});


BasicForms.bind({})


BasicForms.args = {
  forms,
  opts
}
