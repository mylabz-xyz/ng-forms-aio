//@ts-nocheck

import { Meta, Story } from '@storybook/angular';

import { NgAioFormsComponent } from './../../../ng-aio-forms/src/lib/ng-aio-forms.component';

export default {
  title: 'Test',
} as Meta;

const template = `<div>{{test}}</div><div>{{test2}}</div>`;

const forms: any = {
  test: 'test1',
  test2: 'test2',
};
const story: Story<NgAioFormsComponent> = (args) => ({
  props: {
    ...args,
  },
  template,
});

 const Primary = story.bind({});

Primary.args = {
  test: 'test1',
  test2: 'test2',
};


export  {Primary};
