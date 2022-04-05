import {
  AfterViewInit,
  ChangeDetectorRef,
  Component,
  ElementRef,
  ViewChild,
} from '@angular/core';
import { Validators } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';
import { NgAioForms } from 'projects/ng-aio-forms/src/lib/models/NgAioForms';
import { AbstractWithForm } from '../../abstract';
import { AnimatedFormProvider, AnimatedIcon,AnimatedLinkProvider } from './../../providers';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements AfterViewInit {
  public previewTypescript: any = {
    fr: `// On déclare la structure de notre form
    public introForm: NgAioForms = [
      {
        label: 'Ceci est un input',
        component: 'input',
        value: '',
      },
      {
        label: 'Ceci est un text-area',
        component: 'text-area',
        value: '',
      },
    ];`,
    en: `// Create a form
    public introForm: NgAioForms = [
      {
        label: 'This is an input',
        component: 'input',
        value: '',
      },
      {
        label: 'This is an text-area',
        component: 'text-area',
        value: '',
      },
    ];`,
  };

  public previewTemplate: any = {
    fr: `// On appel NgAioForms et on lui passe notre valeur form
    <ng-aio-forms
    [forms]="forms"
    (onChange)="onFormChange($event)"
    ></ng-aio-forms>

    // Et voila!`,
    en: `// Call ngAioForms, pass form to it and listen for change
    <ng-aio-forms
    [forms]="forms"
    (onChange)="onFormChange($event)"
    ></ng-aio-forms>

    // That it !`,
  };
  public multiLineForm: NgAioForms = [
    {
      label: 'Sex',
      component: 'select',
      values: [
        { value: 0, label: 'Male' },
        { value: 1, label: 'Female' },
        { value: 2, label: 'Other' },
      ],
      col: 'col-2',
    },
    {
      label: 'Ceci est un input',
      component: 'input',
      value: '',
      col: 'col-10',
    },
    {
      label: 'Ceci est un input',
      component: 'input',
      value: '',
      required: true,
      col: 'col-6',
    },
    {
      label: 'Ceci est un input',
      component: 'text-area',
      value: '',
      formControlFeedBack: {
        required: 'is required',
        pattern: 'need to respect pattern',
      },
    },
  ];

  public onMultiLineChange = (out: any) => {
    console.log(out);
  };

  public submitForm: NgAioForms = [
    {
      label: 'This input is required',
      component: 'input',
      value: '',
      required: true,
      onChange: (value) => {
        console.log(value);
      },
    },
    {
      label: 'This checkbox is optional',
      component: 'checkbox-list',
      values: [
        { value: 1, label: 'Option 1' },
        { value: 2, label: 'Option 2' },
      ],
    },
  ];

  public animatedForm: NgAioForms = [
    {
      label: 'Title',
      component: 'select',
      values: [
        { value: 0, label: 'Mr' },
        { value: 1, label: 'Mrs' },
        { value: 2, label: 'Ms' },
      ],
      required: true,
      onChange: (value) => {
        console.log(value);
      },
      col: 'col-2',
    },
    {
      label: 'Name your pet',
      component: 'input',
      value: '',
      required: true,
      onChange: (value) => {
        console.log(value);
      },
      col: 'col-10',
    },
    {
      label: 'Name your pet',
      component: 'input',
      value: '',
      required: true,
      onChange: (value) => {
        console.log(value);
      },
    },
    {
      label: 'My animal is a :',
      component: 'checkbox-list',
      values: [
        { value: 1, label: 'A Bog' },
        { value: 2, label: 'A Cat' },
      ],
    },
  ];

  public langChangeAnimation = false;
  public formSvg = ``;

  constructor(
    private animatedFormProvider: AnimatedFormProvider,
    public translateService: TranslateService,
    public animatedLinkProvider:AnimatedLinkProvider
  ) {
    translateService.onDefaultLangChange.subscribe(() => {
      this.langChangeAnimation = true;
      setTimeout(() => {
        this.langChangeAnimation = false;
      });
    });
  }

  ngAfterViewInit(): void {

  }
}
