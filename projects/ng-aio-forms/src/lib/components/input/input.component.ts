import { Component,  Input,  OnInit } from '@angular/core';
import { AbstractComponent } from './../abstract.component';

@Component({
  selector: 'ng-aio-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
})
export class NgAioInputFormComponent
  extends AbstractComponent
  implements OnInit
{
  @Input() preprendLabel: number | any;
  @Input() appendLabel: number | any;
  @Input() type: string | any = 'text';

  public override _idMarker = 'ngAioTextBox_';

}
