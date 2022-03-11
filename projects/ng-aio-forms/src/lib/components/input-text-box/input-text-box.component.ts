import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';

@Component({
  selector: 'ng-aio-input-text-box',
  templateUrl: './input-text-box.component.html',
  styleUrls: ['./input-text-box.component.scss'],
})
export class NgAioInputTextBoxComponent implements OnInit {
  @Input() label: string | undefined;
  @Input() _index: number | any;
  @Input() preprendLabel: number | any;
  @Input() appendLabel: number | any;

  @Input() value?: string | number | any = '';

  @Output() inputChange = new EventEmitter();

  ngOnInit() {
    this.initIndex();
  }

  public getValue(event: Event): string {
    return (event.target as HTMLInputElement).value;
  }

  public emit(value: any): void {
    this.value = value;
    this.inputChange.emit(value);
  }

  private initIndex() {
    if (this._index === undefined || this._index === null) {
      this._index = 0;
    }
  }
}
