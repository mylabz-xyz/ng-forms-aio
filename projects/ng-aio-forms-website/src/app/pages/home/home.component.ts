import { Component, OnInit } from '@angular/core';
import { NgAioForms } from 'projects/ng-aio-forms/src/lib/models/NgAioForms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  public homeForms: NgAioForms = [
    {
      label: 'Ceci est un input',
      component: 'input',
      value: '',
      onChange: (e: any) => {
        console.log(e);
        console.log('input');
      },
    },
    {
      label: 'Ceci est un input',
      component: 'input',
      value: '',
      onChange: (e: any) => {
        console.log(e);
        console.log('input');
      },
    },
  ];
  constructor() {}

  ngOnInit(): void {}
}
