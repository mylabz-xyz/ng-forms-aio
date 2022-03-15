import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NgAioTheme, Themes } from '../const';

@Component({
  template: '',
})
export class AbstractComponent implements OnInit {
  @Input() label: string | undefined;
  @Input() _index: number | undefined;
  @Input() value?: string | number | any = '';
  @Input() theme!: NgAioTheme;
  public themes = Themes;

  @Output() onChange: EventEmitter<any> = new EventEmitter();

  public required = false;
  public invalid = false;
  public isFocus = false;

  public _id: string = '';

  public _idMarker: string = '';

  public _idDynamic = (id: string | number): string =>
    this._idMarker + id + '_' + this._index;

  ngOnInit(): void {
    this.initIndex();
    this.initId();

    if (this.constructor.name === 'NgAioCheckboxFormComponent') {
      this.checkDefaultSelected();
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
  private checkDefaultSelected() {
    if (this.value === undefined || this.value === null) {
      this.value = 0;
    }
  }
}
