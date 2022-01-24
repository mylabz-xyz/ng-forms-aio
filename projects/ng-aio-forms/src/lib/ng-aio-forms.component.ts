import { Component, EventEmitter, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MapSchema, NgAioForms, NgAioItem } from './models/NgAioForms';

@Component({
  selector: 'ng-aio-forms',
  template: `
    <div *ngFor="let formID of _formsKeys" [ngSwitch]="_forms[formID].type">
      <ng-aio-select
        [label]="_forms[formID].label"
        [values]="_forms[formID].value"
        *ngSwitchCase="'select'"
      >
      </ng-aio-select>
      <ng-aio-input
        [label]="_forms[formID].label"
        [value]="_forms[formID].value"
        *ngSwitchCase="'input'"
      >
      </ng-aio-input>
      <ng-aio-checkbox
        [label]="_forms[formID].label"
        [value]="_forms[formID].value"
        *ngSwitchCase="'checkbox'"
      >
      </ng-aio-checkbox>
      <div *ngSwitchDefault>...</div>
    </div>
  `,
  styles: [],
})
export class NgAioFormsComponent implements OnInit {
  @Input() forms!: NgAioForms;

  public _forms: any = {};

  public _formsKeys: string[] | any = [];

  private _keyStart = 'ng_aio_';

  private _formatID = (form: NgAioItem, count: any) =>
    form?.name ||
    `${this._keyStart}_${form.type}_${
      count[form.type] !== 0 ? count[form.type] : ''
    }`;

  private _formatEventID = (name: string, key: string, count: any) =>
    name !== '' ? name : `on${key}${count[key] !== 0 ? count[key] : ''}Change`;

  ngOnInit(): void {
    this.formsToObject();
  }
  private formsToObject() {
    if (!this.forms) {
      console.error('ERROR : provide forms input');
    }
    const count: any = {};
    var id = '';
    var eventId = '';
    this.forms.forEach((form: NgAioItem) => {
      count[form.type] = count[form.type] ? count[form.type]++ : 0;
      id = this._formatID(form, count);
      eventId = this._formatEventID(form?.name || '', form.type, count);

      Object.defineProperty(this._forms, id, {
        value: {
          value: form?.value || '',
          oldValue: '',
          label: form?.label || '',
          type: form?.type,
          id: id,
          required: form?.required || false,
        },
        enumerable: true,
        writable: true,
      });
      Object.defineProperty(this, eventId, {
        value: new EventEmitter(),
        enumerable: true,
        writable: true,
      });
    });

    this._formsKeys = Object.keys(this._forms);

    type _NgAioFormsComponent = MapSchema<typeof this._forms>;
  }

  private addPropertyToClass() {
    Object.defineProperty(this, 'id', {
      value: 'test',
      enumerable: true,
      writable: true,
    });
  }

  private generateEventsEmitter() {}
}
