import { Component } from '@angular/core';
import { AbstractComponent } from './../abstract.component';

@Component({
  selector: 'ng-forms-aio-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.scss'],
})
export class NgAioCheckboxFormComponent
  extends AbstractComponent
{
  public override _idMarker = 'ngAioCheckBox_';
  public override componentName = 'NgAioCheckboxFormComponent'


  public override emit(event: any, i?: any, choice?: any): void {
    if (event.target.checked) {
      this.value = (event.target as HTMLInputElement).value;
      this.values?.forEach((_choice: any, index: number) => {
        if (_choice !== choice) {
          (document.getElementById(this._idDynamic(index)) as any)['checked'] =
            false;
        }
      });
    } else {
      this.value = false;
      this.values?.forEach((_choice: any, index: number) => {
        (document.getElementById(this._idDynamic(index)) as any)['checked'] =
          false;
      });
    }
    this.onChange.emit({ value: this.value, id: this._idDynamic(i) });
  }
}
