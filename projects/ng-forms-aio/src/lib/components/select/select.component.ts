import {
  Component,
  Input,
} from '@angular/core';
import { AbstractComponent } from './../abstract.component';

@Component({
  selector: 'ng-forms-aio-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss'],
})
export class NgAioSelectFormComponent
  extends AbstractComponent
{
  @Input() formValueTips: number | any;

  public override _idMarker = 'ngAioSelect_';
  public override componentName = 'NgAioSelectFormComponent'

}
