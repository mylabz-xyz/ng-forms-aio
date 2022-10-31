Documentation for **Events**

## When To Use

When you want listen an events of **NG-AIO-FORMS**

## How to use

```ts
const onChange = (change:NgFormsAio) => {
console.log('Something changed in the form');
};

const onCreate = (change:NgFormsAio) => {
console.log('The form has been created');
};

const onSubmit = (change:NgFormsAio) => {
console.log('The form has been submitted');
};

const form: NgFormsAio = [{
  label: "Enter your name",
  component: 'input',
  value: ""
}];
```


```html
<ng-forms-aio
  [forms]="form"
  (onChange)="onChange($event)"
  (onCreate)="onCreate($event)"
  (onSubmit)="onSubmit($event)"
></ng-forms-aio>
```
## Interface

This interface is usefull for the callback of all events. It will be an Object of **NgFormsAioItem**.
The keys of the return Object is set with the name the used component type. For exemple **input**, **checkbox**, **checkbox-list** ... In case of many use of one component type, we had an index for exemple **input_1**, **checkbox_1**, **checkbox-list_1**.

The interface **NgFormsAioItem** interface includes all component types.

**For more precision and to see exactly your return please select the desired components in the Documentation page.**

```ts
export interface NgFormsAioItem {
  /**
   * @description Label of form
   * @default
   * null;
   */
  label?: string | undefined;
  /**
   * @description Field type (only for input component)
   * @default
   * 'text';
   */
  type?: 'text' | 'password';
  /**
   * @description Component to use for form object
   */
  component: 'input' | 'text-area' | 'checkbox'| 'checkbox-list' | 'select';
  /**
   * @description Actual or init value of form
   * @default
   * '' if type input;
   * 0 if type checkbox | select;
   */
  value?: string | number | [] |any| undefined;
  /**
   * @description Actual or init value of form (only for checkbox)
   * @default
   * '' if type input;
   * 0 if type checkbox | select;
   */
  values?: { value?: any; label?: any }[];
  /**
   * @description Last value of form
   * @default
   * '' if type NgAioInput;
   *  0 if type NgAioCheckbox;
   *  0 if type NgAioSelect;
   */
  oldValue?: string | number | string[] | number[] | undefined;
  /**
   * @description Calback called on any form change
   * @property value
   * @property formKey
   */
  onChange?: (value?: any, formKey?: any) => void;
  /**
   * @description Name is usefull to generate EventEmmiter
   * @description **If null type is used instead of name**
   * @description **If null and objects with same type, type and index is used**
   */
  id?: string;
  /**
   * @description Name is usefull to generate EventEmitter
   */
  required?: boolean;
  /**
   * TODO
   */
  controlType?: string;
  /**
   * TODO
   */
  options?: string;
  /**
   * TODO
   */
  validator?:
    | ValidatorFn
    | ValidatorFn[]
    | AbstractControlOptions
    | null
    | undefined;
  asyncValidator?: AsyncValidatorFn | AsyncValidatorFn[] | null | undefined;

  /**
   * @description formControls feedback
   */
  formControlFeedBack?: {
    [key: string]: string;
    //@ts-ignore
    required?: string;
    //@ts-ignore
    pattern?: string;
  };

  /**
   * @description set col size for form element
   * @default col-12 (will take 100% of available width)
   */
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
}[]
```
