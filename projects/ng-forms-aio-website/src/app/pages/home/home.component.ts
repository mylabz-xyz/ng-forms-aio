import { AfterViewInit, Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { NgFormsAio } from 'projects/ng-forms-aio/src/lib/models/NgFormsAio';
import { AnimatedFormProvider,  AnimatedLinkProvider } from './../../providers';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements AfterViewInit {
  public previewTypescript: any = {
    fr: `// On déclare la structure de notre form
    public introForm: NgFormsAio = [
      {
        label: 'This is an input',
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
    public introForm: NgFormsAio = [
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
    ];`
  };

  public previewTemplate: any = {
    fr: `// On appel NgFormsAio et on lui passe notre valeur form
    <ng-forms-aio
    [forms]="forms"
    (onChange)="onFormChange($event)"
    ></ng-forms-aio>

    // Et voila!`,
    en: `// Call ngFormsAio, pass form to it and listen for change
    <ng-forms-aio
    [forms]="forms"
    (onChange)="onFormChange($event)"
    ></ng-forms-aio>

    // That it !`
  };
  public multiLineForm: NgFormsAio = [
    {
      label: 'Sex',
      component: 'select',
      values: [
        { value: 0, label: 'Male' },
        { value: 1, label: 'Female' },
        { value: 2, label: 'Other' }
      ],
      col: 'col-2'
    },
    {
      label: 'This is an input',
      component: 'input',
      value: '',
      col: 'col-10'
    },
    {
      label: 'This is an input',
      component: 'input',
      value: '',
      required: true,
      col: 'col-6'
    },
    {
      label: 'This is an text-area',
      component: 'text-area',
      value: '',
      formControlFeedBack: {
        required: 'is required',
        pattern: 'need to respect pattern'
      }
    }
  ];
  public animatedForm: NgFormsAio = [
    {
      label: 'Title',
      component: 'select',
      values: [
        { value: 0, label: 'Mr' },
        { value: 1, label: 'Mrs' },
        { value: 2, label: 'Ms' }
      ],
      onChange: value => {
        console.log(value);
      },
      col: 'col-2'
    },
    {
      label: 'Name of the owner',
      component: 'input',
      value: '',
      required: true,
      onChange: value => {
        console.log(value);
      },
      col: 'col-10'
    },
    {
      label: 'Name your pet',
      component: 'input',
      value: '',
      required: true,
      onChange: value => {
        console.log(value);
      }
    },
    {
      label: 'My animal is a :',
      component: 'checkbox-list',
      required: true,
      values: [
        { value: 1, label: 'A Dog 🐶' },
        { value: 2, label: 'A Cat 🐱' }
      ]
    }
  ];

  public langChangeAnimation = false;
  public formSvg = ``;

  constructor(
    private animatedFormProvider: AnimatedFormProvider,
    public translateService: TranslateService,
    public animatedLinkProvider: AnimatedLinkProvider
  ) {}

  ngAfterViewInit(): void {
    this.translateService.onLangChange.subscribe(() => {
      this.langChangeAnimation = true;
      setTimeout(() => {
        this.langChangeAnimation = false;
      }, 250);
    });
  }

  public onSubmit(event:NgFormsAio){
  }
}
