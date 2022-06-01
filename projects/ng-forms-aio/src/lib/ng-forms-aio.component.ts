import { AfterViewInit, Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { NgFormsAio, NgFormsAioOptions, NgFormsAioItem } from './models/NgFormsAio';

import './extends/String';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { map, pairwise, startWith, Subscription } from 'rxjs';
import { NgAioTheme } from './const';
import { NgFormsAioConfig, NgFormsAioService } from './ng-forms-aio.service';

@Component({
  selector: 'ng-forms-aio',
  templateUrl: './ng-forms-aio.component.html',
  styleUrls: ['./ng-forms-aio.component.scss']
})
export class NgFormsAioComponent implements OnInit, OnDestroy {
  @Input() forms!: NgFormsAio;
  @Input() displaySubmitBtn: boolean = false;
  @Input() submitLabel: string = 'Submit';
  @Input() opts: NgFormsAioOptions = {
    debug: false,
    submitIfValid: true
  };
  @Input() theme: NgAioTheme = 'float-label-default';
  @Input() formId?: string;

  public _forms: { [key: string]: NgFormsAioItem } = {};

  public formGroup!: FormGroup
  public _formsGroup: { [key: string]: FormControl } = {};

  public _formsKeys: string[] | any = [];

  private _keyStart = '';

  @Output() onChange = new EventEmitter();
  @Output() onCreate = new EventEmitter();
  @Output() onSubmit = new EventEmitter();

  public defaultErrors: any = {
    input: ' is required ',
    'text-area': ' is required',
    checkbox: ': Select at least one element',
    'checkbox-list': ': Select at least one element',
    select: ': Select at least one element'
  };

  public submitted = false;

  private subs: Subscription[] = [];

  constructor(private formBuilder: FormBuilder, private ngFormsAioService: NgFormsAioService) {}

  private _formatID = (form: NgFormsAioItem, count: any) =>
    `${this._keyStart}${form.component}${
      count[form.component as never] !== 0 ? '_' + count[form.component as never] : ''
    }`;

  private _formatEventID = (key: string, count: any) =>
    `on${key.Capitalize()}${count[key] !== 0 ? count[key] : ''}Change`;

  ngOnInit(): void {
    this.listenConfig();
    if (this.opts.debug) {
      this.alertDebug();
    }
    this.toObject();
    this.formGroup = this.toFormGroup();
  }

  private listenConfig() {
    this.subs.push(
      this.ngFormsAioService.getConfig$().subscribe((config: NgFormsAioConfig) => {
        if (config.opts) this.opts = { ...this.opts, ...config.opts };
        if (config?.displaySubmitBtn === false || config?.displaySubmitBtn === true)
          this.displaySubmitBtn = config.displaySubmitBtn;
        if (config.submitLabel) this.submitLabel = config.submitLabel;
        if (config.theme) this.theme = config.theme;
      })
    );
  }

  public submit() {
    this.submitted = true;
    if (this.formGroup.valid) {
      this.onSubmit.emit(this.formGroup);
    }
  }

  public onFormElementChange(id: string | undefined, event: any) {
    this._forms[id!].oldValue = this._forms[id!].value;
    this._forms[id!].value = event.value;
    if (this._forms[id!].onChange) {
      this._forms[id!].onChange!(event.value, id);
    }
    this.updateFormByKey(id!, event.value);
    this.onChange.emit(this.formGroup);

    if (this.opts.debug) {
      this.debug(this._formsGroup, 'on form change');
    }
  }

  private installPlugins() {}

  private toObject() {
    if (!this.forms) {
      console.error('ERROR : provide forms input');
    }
    const count: any = {};

    this.forms.forEach((form: NgFormsAioItem, index: number) => {
      count[form.component as never] =
        count[form.component as never] !== undefined ? count[form.component as never] + 1 : 0;

      const id = form?.id || this._formatID(form, count);
      const eventId = form?.id || this._formatEventID(form.component as never, count);
      const defaultClass = 'float-left';

      var label = form?.label || '';

      if (form?.required) {
        label = '*' + label;
      }

      Object.defineProperty(this._forms, id, {
        value: {
          value: form?.value || [],
          values: form?.values || [],
          label: label,
          component: form?.component,
          type: form?.type,
          id: id,
          col: defaultClass + ' ' + (form?.col || 'd-flex flex-col col-12') + ' ',
          required: form?.required || false,
          eventId: eventId,
          onChange: form?.onChange || false
        },
        enumerable: true,
        writable: true
      });

      var validator = null;

      if (form.validator) {
        validator = form.validator;
      }
      if (form.required) {
        validator = Validators.required;
      }

      Object.defineProperty(this._formsGroup, id, {
        value: new FormControl(form.value || '', validator),
        enumerable: true,
        writable: true
      });

      this._formsGroup[id].valueChanges.pipe(
        startWith(null),
        pairwise(),
        map(pairValues => {
          return {
            current: pairValues[0],
            previous: pairValues[1]
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

  private toFormGroup() {
    return this.formBuilder.group(this._formsGroup);
  }

  private reset() {
    this._forms = {};
    //@ts-ignore
    this.formGroup = null;
    this._formsGroup = {};
    this._formsKeys = [];
    this._keyStart = '';
    this.opts = {
      debug: false,
      submitIfValid: true
    };
  }

  private alertDebug() {
    console.info('%c [ng-forms-aio] Debug Enabled !', 'color:red;font-size:1.2rem;background:black;');
  }

  private debug(value: any, from?: string) {
    if (from) console.info(`[ng-forms-aio] ${from}`);
    console.info(value);
  }

  private debugTable(value: any, from?: string) {
    if (from) console.info(`[ng-forms-aio] ${from}`);
    console.table(value);
  }

  ngOnDestroy(): void {
    if (this.subs.length > 0) {
      this.subs.forEach(sub => sub.unsubscribe());
    }
  }
}
