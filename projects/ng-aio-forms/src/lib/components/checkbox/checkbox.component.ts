import {
  AfterViewInit,
  Component,
  EventEmitter,
  Input,
  OnDestroy,
  OnInit,
  Output,
} from '@angular/core';

@Component({
  selector: 'ng-aio-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.scss'],
})
export class NgAioCheckboxFormComponent
  implements OnInit, AfterViewInit, OnDestroy
{
  @Input() choices: string[] | undefined;
  @Input() label: string | undefined;
  @Input() _index: number | undefined;

  @Output() choicesSelected = new EventEmitter();

  public required = false;
  public invalid = false;

  private value: string = '';

  constructor() {}

  ngOnInit() {}

  ngAfterViewInit() {}

  public emit(event: any, i: any, choice: any): void {
    if (event.target.checked) {
      this.value = (event.target as HTMLInputElement).value;
      this.choices?.forEach((_choice, index) => {
        if (_choice !== choice) {
          (
            document.getElementById(
              _choice + '_' + index + '_' + this._index
            ) as any
          )['checked'] = false;
        }
      });
    } else {
      this.value = '';
      this.choices?.forEach((_choice, index) => {
        (
          document.getElementById(
            _choice + '_' + index + '_' + this._index
          ) as any
        )['checked'] = false;
      });
    }

    this.choicesSelected.emit(this.value);
  }

  ngOnDestroy() {}
}
