Documentation for **Checkbox-list** component

## When To Use

When there is a need for display form.

## How to use

```ts
const form = [{
  label: "Enter your name",
  component: "checkbox-list",
  values: [{label: '', value: ''}]
}]
```

```html
<ng-forms-aio
  [forms]="form"
  (onChange)="onChange($event)"
></ng-forms-aio>
```
## Interface

This interface is usefull for the callback of all events.

```ts
interface CheckboxList {
  type: 'checkbox-list';
  values: {label: string, value: any}[];
  required: boolean;
  formControl: FormControl; // Generated by the library
  preprendLabel?: string;
  preprendLabel?: string;
  theme?: string;
  onChange: EventEmitter<any>;  // Generated by the library
  invalid: ValidationErrors;  // Generated by the library
  col?:
    | 'col-1'
    | 'col-2'
    | 'col-3'
    | 'col-4'
    | 'col-5'
    | 'col-6'
    | 'col-7'
    | 'col-8'
    | 'col-9'
    | 'col-10'
    | 'col-11'
    | 'col-12';
}
```