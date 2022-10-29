Documentation for **Button** component

## When To Use

When there is a need for display form.

## How to use

```html
<ng-forms-aio
  displaySubmitBtn="true"
  submitLabel="My submit button"
></ng-forms-aio>
```

**Or**

```ts
const form: NgFormsAioOptions = {
  displaySubmitBtn: true;
  submitLabel: 'Submit'
}
```

```html
<ng-forms-aio
  displaySubmitBtn="true"
  submitLabel="My submit button"
></ng-forms-aio>
```
## Interface

This interface is usefull for the callback of all events.

```ts
interface Button {
  displaySubmitBtn: boolean; // Default true
  submitLabel: string;
}
```
