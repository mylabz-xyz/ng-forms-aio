import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';

@Component({
  selector: 'ng-aio-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
})
export class NgAioInputFormComponent implements OnInit {
  @Input() label: string | undefined;
  @Input() _index: number | any;
  @Input() preprendLabel: number | any;
  @Input() appendLabel: number | any;
  @Input() type: string | any='text';

  @Input() value?: string | number | any = '';

  @Output() inputChange = new EventEmitter();

  ngOnInit() {
    this.initIndex();
  }

  public getValue(event: Event): string {
    return (event.target as HTMLInputElement).value;
  }

  public emit(value: any): void {
    this.inputChange.emit(value);
  }

  private initIndex() {
    if (this._index === undefined || this._index === null) {
      this._index = 0;
    }
  }
}
