import { AfterContentInit, AfterViewInit, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, ValidationErrors } from '@angular/forms';
import { NgFormsAioTheme, NgFormsAioThemesList } from '../const';

@Component({
  template: ''
})
export class AbstractComponent implements OnInit, AfterContentInit {
  @Input() label: string | undefined;
  @Input() _index: number | undefined;
  @Input() value?: string | number | any = '';
  @Input() values: string[] | any = null;

  @Input() formControl!: FormControl;
  @Input() theme: NgFormsAioTheme = 'float-label-default';
  @Input() isSubmitted = false;
  @Input() invalid: ValidationErrors | null = null;
  @Input() required = false;

  public themes = NgFormsAioThemesList;

  @Output() onChange: EventEmitter<any> = new EventEmitter();

  public isFocus = false;

  public _id: string = '';

  public _idMarker: string = '';

  public _idDynamic = (id: string | number): string => this._idMarker + id + '_' + this._index;

  public componentName!: string;

  ngOnInit(): void {
    this.initIndex();
    this.initId();
  }

  ngAfterContentInit(): void {
    if (this.componentName === 'NgAioCheckboxFormComponent') {
      this.checkCheckboxSelected();
    }
    if (this.componentName === 'NgAioCheckboxListFormComponent') {
      this.checkCheckboxListSelected();
    }

    if (this.componentName === 'NgAioSelectFormComponent') {
      this.dropDownSelected();
    }
    if (this.componentName !== 'ButtonComponent') {
      this.onChange.emit({ value: this.value, id: this._id });
    }
  }

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
    this.value = this.values[0];
  }
}
