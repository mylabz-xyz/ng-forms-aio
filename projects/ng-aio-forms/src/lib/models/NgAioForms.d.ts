export interface NgAioForms extends Array<NgAioItem> {
  label: string | undefined;
  onChange?: Function;
}

export interface NgAioItem {
  label: string | undefined;
  type: 'input' | 'checkbox' | 'select' | 'select-input';
  value?: string | number | string[] | number[] | undefined;
  onChange?: Function;
}

export interface NgAioBase extends NgAioItem {
  label: string | undefined;
  _index: number | undefined;
}

export interface NgAioInput extends NgAioBase {}
export interface NgAioCheckbox extends NgAioBase {}
export interface NgAioSelect extends NgAioBase {}
export interface NgAioSelectInput extends NgAioBase {}
