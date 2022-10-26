Documentation for **forms-aio** component

## When To Use

When there is a need for display form.

## Interface

```ts
interface FormsAio {
  label: string;
  component: 'input';
  value: string | number;
}
```

## How to use

```ts
const form = {
  label: "Enter your name",
  component: 'input',
  value: ""
}
```

```html
<ng-forms-aio
  [forms]="form"
  (onChange)="onChange($event)"
></ng-forms-aio>
```

### [nzAutocomplete]

| Property           | Description                              | Type                      | Default |
| ------------------ | ---------------------------------------- | ------------------------- | ------- |
| `[nzAutocomplete]` | used to bind `nzAutocomplete` components | `NzAutocompleteComponent` | -       |

### nz-autocomplete

| Property                       | Description                                                                                                           | Type                            | Default                         |
| ------------------------------ | --------------------------------------------------------------------------------------------------------------------- | ------------------------------- | ------------------------------- |
| `[nzBackfill]`                 | backfill selected item the input when using keyboard                                                                  | `boolean`                       | `false`                         |
| `[nzDataSource]`               | Data source for autocomplete                                                                                          | `AutocompleteDataSource`        | -                               |
| `[nzDefaultActiveFirstOption]` | Whether active first option by default                                                                                | `boolean`                       | `true`                          |
| `[nzWidth]`                    | Custom width, unit px                                                                                                 | `number`                        | trigger element width           |
| `[nzOverlayClassName]`         | Class name of the dropdown root element                                                                               | `string`                        | -                               |
| `[nzOverlayStyle]`             | Style of the dropdown root element                                                                                    | `object`                        | -                               |
| `[compareWith]`                | Same as [SelectControlValueAccessor](https://angular.io/api/forms/SelectControlValueAccessor#caveat-option-selection) | `(o1: any, o2: any) => boolean` | `(o1: any, o2: any) => o1===o2` |

### nz-auto-option

| Property       | Description                          | Type      | Default |
| -------------- | ------------------------------------ | --------- | ------- |
| `[nzValue]`    | bind ngModel of the trigger element  | `any`     | -       |
| `[nzLabel]`    | display value of the trigger element | `string`  | -       |
| `[nzDisabled]` | disabled option                      | `boolean` | `false` |
