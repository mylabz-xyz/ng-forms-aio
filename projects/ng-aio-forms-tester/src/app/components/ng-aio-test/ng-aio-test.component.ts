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
      onChange: () => {},
    },
    {
      label: 'Ceci est un select',
      type: 'select',
      value: '',
      onChange: () => {},
    },
    {
      label: 'Ceci est un checkbox',
      type: 'checkbox',
      value: '',
      onChange: () => {},
      name: '',
    },
  ];
}
