import {
  ChangeDetectorRef,
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
} from '@angular/core';
import { MapSchema, NgAioForms, NgAioItem } from './models/NgAioForms';

import './extends/String';

export type _NgAioFormsComponent = MapSchema<
  typeof NgAioFormsComponent['prototype']['_forms']
>;

@Component({
  selector: 'ng-aio-forms',
  templateUrl: './ng-aio-forms.component.html',
  styles: [],
})
export class NgAioFormsComponent implements OnInit {
  @Input() forms!: NgAioForms;

  public _forms: any = {};

  public _formsKeys: string[] | any = [];

  private _keyStart = 'ng_aio_';

  constructor(private cdf: ChangeDetectorRef) {}

  private _formatID = (form: NgAioItem, count: any) =>
    form?.name ||
    `${this._keyStart}_${form.type}_${
      count[form.type] !== 0 ? count[form.type] : ''
    }`;

  private _formatEventID = (name: string, key: string, count: any) =>
    name !== ''
      ? name
      : `on${key.Capitalize()}${count[key] !== 0 ? count[key] : ''}Change`;

  ngOnInit(): void {
    this.formsToObject();
    console.log(this._formsKeys);
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
      console.log(eventId);
      Object.defineProperty(this._forms, id, {
        value: {
          value: form?.value || '',
          oldValue: '',
          label: form?.label || '',
          onChange: form?.onChange || this.defaultOnChangeProperty.bind(form),
          type: form?.type,
          id: id,
          required: form?.required || false,
          eventId: eventId,
        },
        enumerable: true,
        writable: true,
      });
      Object.defineProperty(this, eventId, {
        value: new Output(eventId),
        enumerable: true,
        configurable: true,
        writable: true,
      });
      Object.defineProperty(this, eventId, {
        value: new EventEmitter(),
        enumerable: true,
        configurable: true,
        writable: true,
      });

      console.log(this);

      this.cdf.markForCheck();
      this.cdf.detectChanges();
    });

    this._formsKeys = Object.keys(this._forms);
  }

  private defaultOnChangeProperty(val: any) {
    const ctx: NgAioItem = this as any;
    const feedback =
      'Change detected : ' +
      ' from ' +
      ctx.label +
      ', type of : ' +
      ctx.type +
      ', with new value' +
      ctx.value;
    console.log(feedback);
  }

  public onFormElementChange(eventId: string, value: any) {
    (this[eventId as never] as never as EventEmitter<any>).emit(value);
  }
}
