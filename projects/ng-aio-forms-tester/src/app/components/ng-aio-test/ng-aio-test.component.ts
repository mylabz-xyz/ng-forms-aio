import { Component, OnInit } from '@angular/core';
import { Validators } from '@angular/forms';
import { NgAioForms } from 'projects/ng-aio-forms/src/lib/models/NgAioForms';

@Component({
  selector: 'ng-aio-forms-ng-aio-test',
  templateUrl: './ng-aio-test.component.html',
  styleUrls: ['./ng-aio-test.component.scss'],
})
export class NgAioTestComponent {
  public forms: NgAioForms = [
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

  public onCheckboxChange(value: any) {}
}
