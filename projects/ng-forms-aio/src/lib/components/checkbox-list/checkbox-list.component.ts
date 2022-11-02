import { Component, Input, OnInit, Output } from '@angular/core';
import { AbstractComponent } from './../abstract.component';

@Component({
  selector: 'ng-forms-aio-checkbox-list',
  templateUrl: './checkbox-list.component.html',
  styleUrls: ['./checkbox-list.component.scss']
})
export class NgAioCheckboxListFormComponent extends AbstractComponent {
  @Input() multi?: boolean;

  public override _idMarker = 'ngAioCheckBoxList_';
  public override componentName = 'NgAioCheckboxListFormComponent'


  public override emit(event: any, i?: any, choice?: any): void {
    if (this.multi) {
      this.multiCheckBoxLogic(event, i, choice);
    } else {
      this.monoCheckBoxLogic(event, i, choice);
    }
  }

  private multiCheckBoxLogic(event: any, i?: any, choice?: any) {
    (document.getElementById(this._idDynamic(i)) as any)['checked'] = true;
    if (event.target.checked && this.value.indexOf(choice) === -1) {
      this.value.push(choice);
    } else {
      (this.value as any[]).splice(this.value.indexOf(choice), 1);
      (document.getElementById(this._idDynamic(i)) as any)['checked'] = false;
    }
    this.onChange.emit({ value: this.value, id: this._idDynamic(i) });
  }

  private monoCheckBoxLogic(event: any, i?: any, choice?: any) {
    this.values.forEach((value: any, index: number) => {
      (document.getElementById(this._idDynamic(index)) as any)['checked'] = false;
    });

    this.value = [];

    setTimeout(() => {
      (document.getElementById(this._idDynamic(i)) as any)['checked'] = true;
      if (event.target.checked && this.value.indexOf(choice) === -1) {
        this.value.push(choice);
      } else {
        (this.value as any[]).splice(this.value.indexOf(choice), 1);
        (document.getElementById(this._idDynamic(i)) as any)['checked'] = false;
      }
      this.onChange.emit({ value: this.value, id: this._idDynamic(i) });
    });
  }
}
