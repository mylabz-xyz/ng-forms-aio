import { Component } from '@angular/core';
import { AbstractComponent } from '..';

@Component({
  selector: 'ng-forms-aio-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent extends AbstractComponent {
  public override componentName: string = 'ButtonComponent';
  public onSubmit() {
    this.onChange.emit('Submit event !');
  }
}
