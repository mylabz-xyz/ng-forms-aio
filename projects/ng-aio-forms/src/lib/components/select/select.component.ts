import {
  Component,
  Input,
} from '@angular/core';
import { AbstractComponent } from './../abstract.component';

@Component({
  selector: 'ng-aio-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss'],
})
export class NgAioSelectFormComponent
  extends AbstractComponent
{
  @Input() values: string[] | any;
  @Input() formValueTips: number | any;

  public override _idMarker = 'ngAioSelect_';
}
