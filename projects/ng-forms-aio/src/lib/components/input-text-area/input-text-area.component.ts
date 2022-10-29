import { Component, Input } from '@angular/core';
import { AbstractComponent } from '../abstract.component';

@Component({
  selector: 'ng-aio-text-area',
  templateUrl: './input-text-area.component.html',
  styleUrls: ['./input-text-area.component.scss'],
})
export class NgAioInputTextAreaComponent extends AbstractComponent {
  @Input() preprendLabel: number | any;
  @Input() appendLabel: number | any;

  public override _idMarker: string='ngAioTextBox_';
}
