import {
  Component,
  EventEmitter,
  Input,
  Output,
  OnDestroy,
  OnInit,
} from '@angular/core';

@Component({
  selector: 'ng-aio-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss'],
})
export class NgAioSelectFormComponent implements OnInit, OnDestroy {
  @Input() values: string[] | any;
  @Input() label: string | undefined;
  @Input() value: number | any;
  @Input() formValueTips: number | any;
  @Input() _index: number | any;

  @Output() choicesSelected = new EventEmitter();

  ngOnInit() {
    this.initIndex();
    this.checkDefaultSelected();
    this.checkRules$();
  }

  public getValue(event: any): string {
    return (event.target as HTMLInputElement).value;
  }

  public emit(value: any): void {
    this.choicesSelected.emit(value);
  }

  private checkRules$() {}

  private checkDefaultSelected() {
    if (this.value === undefined || this.value === null) {
      this.value = 0;
    }
  }

  private initIndex() {
    if (this._index === undefined || this._index === null) {
      this._index = 0;
    }
  }

  ngOnDestroy() {}
}
