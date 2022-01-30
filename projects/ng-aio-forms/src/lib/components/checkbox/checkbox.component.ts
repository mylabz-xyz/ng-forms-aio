import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'ng-aio-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.scss'],
})
export class NgAioCheckboxFormComponent implements OnInit {
  @Input() values: any = [];
  @Input() label: string | undefined;
  @Input() _index: number | undefined;

  @Output() choicesSelected = new EventEmitter();

  public required = false;
  public invalid = false;

  @Input() value?: string | number | any = '';

  ngOnInit() {
    this.initIndex();
  }

  public emit(event: any, i: any, choice: any): void {
    if (event.target.checked) {
      this.value = (event.target as HTMLInputElement).value;
      this.values?.forEach((_choice: any, index: number) => {
        if (_choice !== choice) {
          (
            document.getElementById(
              _choice + '_' + index + '_' + this._index
            ) as any
          )['checked'] = false;
        }
      });
    } else {
      this.value = false;
      this.values?.forEach((_choice: any, index: number) => {
        (
          document.getElementById(
            _choice + '_' + index + '_' + this._index
          ) as any
        )['checked'] = false;
      });
    }

    this.choicesSelected.emit(this.value);
  }

  private initIndex() {
    if (this._index === undefined || this._index === null) {
      this._index = 0;
    }
  }
}
