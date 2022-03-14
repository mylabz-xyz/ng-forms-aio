import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import {
  MapSchema,
  NgAioForms,
  NgAioFormsOptions,
  NgAioItem,
} from './models/NgAioForms';

import './extends/String';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { map, pairwise, startWith } from 'rxjs';

@Component({
  selector: 'ng-aio-forms',
  templateUrl: './ng-aio-forms.component.html',
  styleUrls: ['./ng-aio-forms.component.scss'],
})
export class NgAioFormsComponent implements OnInit {
  @Input() forms!: NgAioForms;
  @Input() opts: NgAioFormsOptions = {
    debug: false,
    submitIfValid: true,
  };
  public _forms: { [key: string]: NgAioItem } = {};

  public formGroup!: FormGroup;
  public _formsGroup: { [key: string]: FormControl } = {};

  public _formsKeys: string[] | any = [];
  private _keyStart = '';

  @Output() onChange = new EventEmitter();
  @Output() onCreate = new EventEmitter();
  @Output() onSubmit = new EventEmitter();

  constructor(private formBuilder: FormBuilder) {}

  private _formatID = (form: NgAioItem, count: any) =>
    `${this._keyStart}${form.component}${
      count[form.component as never] !== 0
        ? '_' + count[form.component as never]
        : ''
    }`;

  private _formatEventID = (key: string, count: any) =>
    `on${key.Capitalize()}${count[key] !== 0 ? count[key] : ''}Change`;

  ngOnInit(): void {
    if (this.opts.debug) {
      this.alertDebug();
    }
    this.toObject();
    this.formGroup = this.toFormGroup();
  }

  public submit() {
    if (this.formGroup.valid) {
      this.onSubmit.emit(this.formGroup);
    }
  }

  public onFormElementChange(id: any, event: any) {
    this._forms[id].oldValue = this._forms[id].value;
    this._forms[id].value = event.value;
    if (this._forms[id].onChange) {
      //@ts-ignore
      this._forms[id].onChange(event.value, id);
    }
    this.updateFormByKey(id, event.value);
    this.onChange.emit(this.formGroup);

    if (this.opts.debug) {
      this.debug(this._formsGroup, 'on form change');
    }
  }

  private toObject() {
    if (!this.forms) {
      console.error('ERROR : provide forms input');
    }
    const count: any = {};
    var id = '';
    var eventId = '';
    this.forms.forEach((form: NgAioItem, index: number) => {
      count[form.component as never] =
        count[form.component as never] !== undefined
          ? count[form.component as never] + 1
          : 0;
      id = form?.id || this._formatID(form, count);
      eventId = form?.id || this._formatEventID(form.component as never, count);
      Object.defineProperty(this._forms, id, {
        value: {
          value: form?.value || '',
          values: form?.values || [],
          label: form?.label || '',
          component: form?.component,
          type: form?.type,
          id: id,
          required: form?.required || false,
          eventId: eventId,
          onChange: form?.onChange || false,
        },
        enumerable: true,
        writable: true,
      });

      Object.defineProperty(this._formsGroup, id, {
        value: new FormControl(form.value || '', form.validator || null),
        enumerable: true,
        writable: true,
      });

      this._formsGroup[id].valueChanges.pipe(
        startWith(null),
        pairwise(),
        map((pairValues) => {
          return {
            current: pairValues[0],
            previous: pairValues[1],
          };
        })
      );
    });
    this._formsKeys = Object.keys(this._forms);

    this.onCreate.emit(this._forms);
  }

  public updateFormByKey(key: string, value: any) {
    this.formGroup.patchValue({ [key]: value });
  }

  public updateFormTypeById(id: string, value: any) {
    this._forms[id];
  }

  private toFormGroup() {
    return this.formBuilder.group(this._formsGroup);
  }

  private reset() {
    this._forms = {};
    this.formGroup;
    this._formsGroup = {};
    this._formsKeys = [];
    this._keyStart = '';
    this.opts = {
      debug: false,
      submitIfValid: true,
    };
  }

  private alertDebug() {
    console.info(
      '%c [Ng-Aio-Forms] Debug Enabled !',
      'color:red;font-size:1.2rem;background:black;'
    );
  }

  private debug(value: any, from?: string) {
    if (from) console.info(`[Ng-Aio-Forms] ${from}`);
    console.info(value);
  }

  private debugTable(value: any, from?: string) {
    if (from) console.info(`[Ng-Aio-Forms] ${from}`);
    console.table(value);
  }
}
