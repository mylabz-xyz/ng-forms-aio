Documentation for **Themes**

## When To Use

When you want provide a theme or customise a class.

## How to use

You can pass an object that implements the interface `NgFormsAioTheme` to **NG-FORMS*AIO**

```ts
const theme: NgFormsAioTheme = 'float-label-default';

const form: NgFormsAio = [{
  label: "Enter your name",
  component: 'input',
  value: ""
}];
```


```html
<ng-forms-aio
  [forms]="form"
  [theme]="theme"
></ng-forms-aio>
```
## Interface

This is the interface and list of all themes.

```typescript
export const Themes = {
  'float-label-default': {
    inputClass: 'float-label border-default',
    focusClass: 'focus-border',
    showLabel: true,
  },
  'float-label-border-center-to-edges': {
    inputClass: 'float-label border-center-to-edges',
    focusClass: 'focus-border',
    showLabel: true,
  },
  'float-label-border-edges-to-center': {
    inputClass: 'float-label border-edges-to-center',
    focusClass: 'focus-border',
    showLabel: true,
  },
  'float-label-borders': {
    inputClass: 'float-label borders-default',
    focusClass: 'focus-border',
    showLabel: true,
  },
  'float-label-borders-diagonal': {
    inputClass: 'float-label borders-diagonal',
    focusClass: 'focus-border',
    showLabel: true,
  },
  'float-label-borders-fill': {
    inputClass: 'float-label borders-fill',
    focusClass: 'focus-border',
    showLabel: true,
  },
  'float-label-background-slide': {
    inputClass: 'float-label background-slide',
    focusClass: 'focus-bg',
    showLabel: true,
  },
  'float-label-background-appear': {
    inputClass: 'float-label background-appear',
    focusClass: 'focus-bg',
    showLabel: true,
  },
  'border-default': {
    inputClass: 'border-default',
    focusClass: 'focus-border',
    showLabel: false,
  },
  'border-center-to-edges': {
    inputClass: 'border-center-to-edges',
    focusClass: 'focus-border',
    showLabel: false,
  },
  'border-edges-to-center': {
    inputClass: 'border-edges-to-center',
    focusClass: 'focus-border',
    showLabel: false,
  },
  'border-reveal': {
    inputClass: 'border-reveal',
    focusClass: 'focus-border',
    showLabel: false,
  },
  'border-slide': {
    inputClass: 'border-slide',
    focusClass: 'focus-border',
    showLabel: false,
  },
  'border-slide-invert': {
    inputClass: 'border-slide-invert',
    focusClass: 'focus-border',
    showLabel: false,
  },
  'borders-default': {
    inputClass: 'borders-default',
    focusClass: 'focus-border',
    showLabel: false,
  },
  'borders-diagonal': {
    inputClass: 'borders-diagonal',
    focusClass: 'focus-border',
    showLabel: false,
  },
  'borders-fill': {
    inputClass: 'borders-fill',
    focusClass: 'focus-border',
    showLabel: false,
  },
  'background-fade': {
    inputClass: 'background-fade',
    focusClass: 'focus-bg',
    showLabel: false,
  },
  'background-slide': {
    inputClass: 'background-slide',
    focusClass: 'focus-bg',
    showLabel: false,
  },
  'background-center-to-edges': {
    inputClass: 'background-center-to-edges',
    focusClass: 'focus-bg',
    showLabel: false,
  },
  'background-edges-to-center': {
    inputClass: 'background-edges-to-center',
    focusClass: 'focus-bg',
    showLabel: false,
  },
  'background-appear': {
    inputClass: 'background-appear',
    focusClass: 'focus-bg',
    showLabel: false,
  },
  'background-fill': {
    inputClass: 'background-fill',
    focusClass: 'focus-bg',
    showLabel: false,
  },
};

export type NgFormsAioTheme = keyof typeof Themes;
```
