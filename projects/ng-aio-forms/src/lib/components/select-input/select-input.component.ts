import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'ng-aio-select-input',
  templateUrl: './select-input.component.html',
  styleUrls: ['./select-input.component.scss'],
})
export class NgAioSelectInputFormComponent implements OnInit {
  @Input() choices: string[] | undefined;
  @Input() label: string | undefined;
  @Input() _index: number | undefined;

  @Output() choicesSelected = new EventEmitter();

  public inputValue: any = '';

  private choice = '';

  constructor() {}

  ngOnInit() {
    if (this._index === undefined || this._index === null) {
      this._index = 0;
    }
    if (this.choices) {
      this.choicesSelected.emit(this.choices[0]);
      this.choice = this.choices[0];
    }
  }

  public getValue(event: any): string {
    return (event.target as HTMLInputElement).value;
  }

  public emitInput() {
    this.choicesSelected.emit(this.choice + ' ' + this.inputValue);
  }
  public emitSelect(value: any) {
    this.choice = value;
    this.choicesSelected.emit(value + ' ' + this.inputValue);
  }
}
