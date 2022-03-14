import { Component } from '@angular/core';
import { NgAioForms } from 'projects/ng-aio-forms/src/lib/models/NgAioForms';
import { AnimatedFormProvider, AnimatedIcon } from './../../providers';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  public showForm = true;
  public showCode = true;
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
    {
      label: 'Ceci est un input',
      component: 'text-area',
      value: '',
      onChange: (e: any) => {
        console.log(e);
        console.log('input');
      },
    },
  ];

  public out = '';

  constructor(private animatedForm: AnimatedFormProvider) {}

  public onChange(homeForms: any) {
    console.log(homeForms);
    this.showForm = false;
    this.homeForms = homeForms;
    setTimeout(() => {
      this.showForm = true;
    });
  }

  public onCreate(homeForms: any) {
    console.log(homeForms);
  }

  public onOut(out: any) {
    this.showCode = false;
    console.log(out);

    const allForms = Object.keys(out.value);
    allForms.forEach((_formKey, index) => {
      this.homeForms[index].value = out.value[_formKey];
    });

    setTimeout(() => {
      this.showCode = true;
    });
  }
}
