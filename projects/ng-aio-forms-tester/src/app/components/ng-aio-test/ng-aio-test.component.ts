import { Component, OnInit } from '@angular/core';
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
      type: 'input',
      value: '',
      onChange: (e: any) => {
        console.log(e);
        console.log('input');
      },
    },
    {
      label: 'Ceci est un select',
      type: 'select',
      value: '',
      onChange: (e: any) => {
        console.log(e);
        console.log('select');
      },
    },
    {
      label: 'Ceci est un checkbox',
      type: 'checkbox',
      value: '',
      onChange: (e: any) => {
        console.log(e);
        console.log('checkbox');
      },
      name: '',
    },
  ];

  public onCheckboxChange(value: any) {
    console.log(value);
  }
}
