export interface NgAioForms extends Array<NgAioItem> {}

export interface NgAioItem {
  /**
   * @description Label of form
   * @default null
   */
  label?: string | undefined;
  type: 'input' | 'checkbox' | 'select' | 'select-input';
  /**
   * @description Actual or init value of form
   * @default '' if type input
   * @default 0 if type checkbox | select
   */
  value?: string | number | string[] | number[] | undefined;
  /**
   * @description Last value of form
   * @default '' if type input
   * @default 0 if type checkbox | select
   */
  oldValue?: string | number | string[] | number[] | undefined;
  /**
   * @description Calback called on any form change
   * @default null
   */
  onChange?: Function;
  /**
   * @description Name is usefull to generate EventEmmiter
   * @description **If null type is used instead of name**
   * @description **If null and objects with same type, type and index is used**
   * @default null
   */
  name?: string;
  /**
   * @description Name is usefull to generate EventEmmiter
   */
  required?: string;
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
