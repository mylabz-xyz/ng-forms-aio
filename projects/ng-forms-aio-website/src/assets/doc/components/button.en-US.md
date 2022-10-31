Documentation for **Button** component

## When To Use

When there is a need for display form.

## How to use

```html
<ng-forms-aio [opts]="{ displaySubmitBtn: true, submitLabel: 'Submit !' }"></ng-forms-aio>
```

**Or**

See **Global Config** under Doc sections for more information.

```ts
export class AppComponent implements OnInit {
  constructor(private ngFormsAioService: NgFormsAioService) {}

  ngOnInit(): void {
    this.ngFormsAioService.setConfig({ displaySubmitBtn: true });
  }
}
```

## Interface

```ts
export interface NgFormsAioOptions {
  submitIfValid?: boolean;
  submitLabel?:string;
  displaySubmitBtn?:boolean;
  debug?: boolean;
  invalidFeedBack?: { [key: string]: string };
  validFeedBackLabel?: string;
  invalidFeedBackLabel?: string;
}
```
