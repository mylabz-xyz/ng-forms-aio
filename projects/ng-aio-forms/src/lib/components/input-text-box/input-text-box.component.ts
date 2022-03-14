import { Component, Input } from '@angular/core';
import { AbstractComponent } from './../abstract.component';

@Component({
  selector: 'ng-aio-input-text-box',
  templateUrl: './input-text-box.component.html',
  styleUrls: ['./input-text-box.component.scss'],
})
export class NgAioInputTextBoxComponent extends AbstractComponent {
  @Input() preprendLabel: number | any;
  @Input() appendLabel: number | any;

  public override _idMarker: string='ngAioTextBox_';
}
