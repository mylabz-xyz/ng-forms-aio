import { Component } from '@angular/core';
import { BaseAbstractGridSpecs } from 'projects/ng-forms-aio/src/test/index';

import { ButtonComponent } from './button.component';
import { fakeAsync } from '@angular/core/testing';
@Component({
  selector: 'test-btn',
  template: `<div>
    <ng-forms-aio-button (onChange)="onSubmit($event)"></ng-forms-aio-button>
  </div>`,
})
class ButtonWrapComponent {
  public lastEvent = '';
  public onSubmit(event:string) {
    this.lastEvent = event;
  }
}
describe('Button Component', () => {
  let baseTestComponent = new BaseAbstractGridSpecs<ButtonWrapComponent>();

  baseTestComponent.init(ButtonComponent, ButtonWrapComponent);
  baseTestComponent.baseTest();

  describe(`Button test`, () => {
    it(`It should emit onSubmit on click event `, fakeAsync(() => {
      const button =
        baseTestComponent.fixture.debugElement.nativeElement.querySelector(
          'button'
        );
      const spyChildOnSubmit = spyOn(
        baseTestComponent.child as ButtonComponent,
        'onSubmit'
      ).and.callThrough();
      const spyParentOnSubmit = spyOn(
        baseTestComponent.component,
        'onSubmit'
      ).and.callThrough();

      button.click();

      expect(spyChildOnSubmit).toHaveBeenCalled();
      expect(spyParentOnSubmit).toHaveBeenCalled();
      expect(baseTestComponent.component.lastEvent).toBe('Submit event !');
    }));
  });
});
