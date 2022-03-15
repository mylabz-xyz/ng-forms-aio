import {
  AbstractControlOptions,
  AsyncValidatorFn,
  ValidatorFn,
} from '@angular/forms';

export interface NgAioForms extends Array<NgAioItem> {}
export interface NgAioFormsOptions {
  submitIfValid?: boolean;
  debug?: boolean;
}

export interface NgAioItem {
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
  component: 'input' | 'text-area' | 'checkbox' | 'select';
  /**
   * @description Actual or init value of form
   * @default
   * '' if type input;
   * 0 if type checkbox | select;
   */
  value?: string | number | undefined;
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
}

export interface NgAioBase extends NgAioItem {
  label: string | undefined;
  _index: number | undefined;
}

export interface NgAioInput extends NgAioBase {}
export interface NgAioCheckbox extends NgAioBase {}
export interface NgAioSelect extends NgAioBase {}
export interface NgAioSelectInput extends NgAioBase {}

type MapSchema<T extends Record<string, keyof NgAioItem>> = {
  -readonly [K in keyof T]: NgAioItem[T[K]];
};
