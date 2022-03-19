import { Component, Input } from '@angular/core';
import { NgAioTheme, Themes } from 'projects/ng-aio-forms/src/lib/const';
import { NgAioForms } from 'projects/ng-aio-forms/src/lib/models/NgAioForms';

@Component({
  template: '',
})
export class AbstractWithForm {
  @Input() form!: NgAioForms;
  @Input() opts: any;
  @Input() theme: any;

  public showForm = true;
  public showCode = true;
  public themeSelected: NgAioTheme = 'float-label-background-slide';
  public themeSelectForm: NgAioForms = [
    {
      label: 'Theme',
      component: 'select',
      values: Object.keys(Themes).map((value, index) => {
        return { label: value, value: value };
      }),
    },
  ];

  public out = '';

  constructor() {}

  public onThemeselect(form: any) {
    this.themeSelected = form.value.select;
  }

  public onChange(key: any, forms: any) {
    this.showForm = false;
    //@ts-ignore
    this[key] = forms;
    setTimeout(() => {
      this.showForm = true;
    });
  }

  public onOut(key: any, out: any) {
    this.showCode = false;
    const allForms = Object.keys(out.value);
    allForms.forEach((_formKey, index) => {
      //@ts-ignore
      this[key][index].value = out.value[_formKey];
    });

    setTimeout(() => {
      this.showCode = true;
    });
  }

  public onCreate(homeForms: any) {
    console.log(homeForms);
  }
}
