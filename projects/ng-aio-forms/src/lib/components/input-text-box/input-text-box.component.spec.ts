import { Component } from '@angular/core';
import { ComponentFixture, fakeAsync, TestBed } from '@angular/core/testing';
import { BaseAbstractGridSpecs } from 'projects/ng-aio-forms/src/test/index';

import { NgAioInputTextBoxComponent } from './input-text-box.component';


@Component({
  selector: 'test-text-area',
  template: `<div>
    <ng-aio-input-text-box (onChange)="onChange($event)" [value]="value"></ng-aio-input-text-box>
  </div>`,
})
class InputTextAreaWrapComponent {
  public lastEvent = '';
  public value = '';
  public onChange(event: { value: string; id: string }) {
    this.lastEvent = event.value;
  }
}
describe('TextArea Component :', () => {
  let baseTestComponent = new BaseAbstractGridSpecs<InputTextAreaWrapComponent>();

  baseTestComponent.init(NgAioInputTextBoxComponent, InputTextAreaWrapComponent);
  baseTestComponent.baseTest();

  it('It should emit input on input value change', fakeAsync(() => {
    const input =
      baseTestComponent.fixture.debugElement.nativeElement.querySelector(
        'textarea'
      );
    const spyChildEmitEvent = spyOn(
      baseTestComponent.child as NgAioInputTextBoxComponent,
      'emit'
    ).and.callThrough();
    const spyParentOnSubmit = spyOn(
      baseTestComponent.component,
      'onChange'
    ).and.callThrough();

    input.value = 'foo';
    input.dispatchEvent(new Event('input'));

    expect(spyChildEmitEvent).toHaveBeenCalled();
    expect(spyParentOnSubmit).toHaveBeenCalled();
    expect(baseTestComponent.component.lastEvent).toBe('foo');
  }));

  it('It should get an intial value', () => {
    baseTestComponent.component.value = 'foo';

    baseTestComponent.fixture.detectChanges();

    const input =
      baseTestComponent.fixture.debugElement.nativeElement.querySelector(
        'textarea'
      );
    expect(input.value).toBe('foo');
  });
});
