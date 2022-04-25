import {
  AfterViewInit,
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
} from '@angular/core';
import { FormControl, ValidationErrors } from '@angular/forms';
import { NgAioTheme, Themes } from '../const';

@Component({
  template: '',
})
export class AbstractComponent implements OnInit, AfterViewInit {
  @Input() label: string | undefined;
  @Input() _index: number | undefined;
  @Input() value?: string | number | any = '';
  @Input() values: string[] | any = null;

  @Input() formControl!: FormControl;
  @Input() theme: NgAioTheme = 'float-label-default';
  @Input() isSubmitted = false;
  @Input() invalid: ValidationErrors | null = null;
  @Input() required = false;

  public themes = Themes;

  @Output() onChange: EventEmitter<any> = new EventEmitter();

  public isFocus = false;

  public _id: string = '';

  public _idMarker: string = '';

  public _idDynamic = (id: string | number): string =>
    this._idMarker + id + '_' + this._index;

  ngOnInit(): void {
    this.initIndex();
    this.initId();

    if (this.constructor.name === 'NgAioCheckboxFormComponent') {
      this.checkCheckboxSelected();
    }
    if (this.constructor.name === 'NgAioCheckboxListFormComponent') {
      this.checkCheckboxListSelected();
    }

    if (this.constructor.name === 'NgAioSelectFormComponent' && this.values) {
      this.dropDownSelected();
    }

    this.onChange.emit({ value: this.value, id: this._id });
    }

  ngAfterViewInit(): void {}

  public emit(value: any): void {
    this.value = value;
    this.onChange.emit({ value: value, id: this._id });
  }

  public getValue(event: Event): string {
    return (event.target as HTMLInputElement).value;
  }

  private initId() {
    this._id = this._idMarker + this._index;
  }

  private initIndex() {
    if (this._index === undefined || this._index === null) {
      this._index = 0;
    }
  }

  // on init select component
  public checkCheckboxSelected() {
    if (this.value === undefined || this.value === null) {
      this.value = false;
    }
  }

  // on init select component
  public checkCheckboxListSelected() {
    if (this.value === undefined || this.value === null) {
      this.value = [];
    }
  }

  // on init select component
  public dropDownSelected() {
    if (this.value === undefined || this.value === null) {
      this.value = this.values[0];
    }
  }
}
