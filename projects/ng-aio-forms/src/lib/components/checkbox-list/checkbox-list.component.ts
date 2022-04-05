import { Component, Input, OnInit, Output } from '@angular/core';
import { AbstractComponent } from './../abstract.component';

@Component({
  selector: 'ng-aio-checkbox-list',
  templateUrl: './checkbox-list.component.html',
  styleUrls: ['./checkbox-list.component.scss'],
})
export class NgAioCheckboxListFormComponent
  extends AbstractComponent {

    public override _idMarker = 'ngAioCheckBoxList_';

  public override emit(event: any, i?: any, choice?: any): void {
    if (event.target.checked && this.value.indexOf(choice) === -1) {
      this.value.push(choice);
       } else {
        (this.value as any[]).splice(this.value.indexOf(choice),1);

           (document.getElementById(this._idDynamic(i)) as any)['checked'] =
             false;
       }
       this.onChange.emit({ value: this.value, id: this._idDynamic(i) });
  }

  // on init select component
  public override checkCheckboxSelected() {
    if (this.value === undefined || this.value === null) {
      this.value = [];

    }
  }
}
