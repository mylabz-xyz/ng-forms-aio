import { Component, Input, Output, EventEmitter } from '@angular/core';
import { NgFormsAioTheme, NgFormsAioThemesList } from 'projects/ng-forms-aio/src/lib/const';
import { NgFormsAio } from 'projects/ng-forms-aio/src/lib/models/NgFormsAio';

@Component({
  template: '',
})
export class AbstractWithForm {
  @Input() form!: NgFormsAio;
  @Input() opts: any;
  @Input() theme: any;
  @Input() title:string=''

  @Output() formChange: EventEmitter<any> = new EventEmitter();

  public showForm = true;
  public showCode = true;
  public themeSelected: NgFormsAioTheme = 'float-label-background-slide';
  public themeSelectForm: NgFormsAio = [
    {
      label: 'Theme',
      component: 'select',
      values: Object.keys(NgFormsAioThemesList).map((value, index) => {
        return { label: value, value: value };
      }),
    },
  ];

  public out = '';

  public onThemeselect(form: any) {
   if(form?.value?.select.length > 0) this.themeSelected = form.value.select;
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
    // console.warn(homeForms);
  }
}
