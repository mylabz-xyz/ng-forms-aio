import { Component } from '@angular/core';
import { ComponentFixture, fakeAsync, TestBed } from '@angular/core/testing';
import { BaseAbstractGridSpecs } from 'projects/ng-aio-forms/src/test/index';
import { NgAioCheckboxFormComponent } from '..';

import { NgAioCheckboxListFormComponent } from './checkbox-list.component';

@Component({
  selector: 'test-checkbox',
  template: `<div>
    <ng-aio-checkbox
      (onChange)="onChange($event)"
      [value]="value"
    ></ng-aio-checkbox>
  </div>`,
})
class InputTextAreaWrapComponent {
  public lastEvent: any = '';
  public value = '';
  public values = [
    { label: 'foo', value: 'foo' },
    { label: 'bar', value: 'bar' },
  ];
  public onChange(event: { value: string; id: string }) {
    console.log(event);
    this.lastEvent = event.value;
  }
}
describe('TextBox Component :', () => {
  let baseTestComponent =
    new BaseAbstractGridSpecs<InputTextAreaWrapComponent>();

  baseTestComponent.init(
    NgAioCheckboxFormComponent,
    InputTextAreaWrapComponent
  );
  baseTestComponent.baseTest();

  // it('It should emit input on input value change', fakeAsync(() => {
  //   const input =
  //     baseTestComponent.fixture.debugElement.nativeElement.querySelector(
  //       'input'
  //     );
  //   const spyChildEmitEvent = spyOn(
  //     baseTestComponent.child as NgAioCheckboxFormComponent,
  //     'emit'
  //   ).and.callThrough();
  //   const spyParentOnSubmit = spyOn(
  //     baseTestComponent.component,
  //     'onChange'
  //   ).and.callThrough();

  //   input.click();

  //   expect(spyChildEmitEvent).toHaveBeenCalled();
  //   expect(spyParentOnSubmit).toHaveBeenCalled();
  //   expect(baseTestComponent.component.lastEvent).toBe(true);
  // }));

  // it('It should get an intial value', () => {
  //   baseTestComponent.component.value = 'foo';

  //   baseTestComponent.fixture.detectChanges();

  //   const input =
  //     baseTestComponent.fixture.debugElement.nativeElement.querySelector(
  //       'input'
  //     );
  //   expect(input.value).toBe('foo');
  // });
});
