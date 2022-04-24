import { Component } from '@angular/core';
import { ComponentFixture, fakeAsync, TestBed } from '@angular/core/testing';
import { BaseAbstractGridSpecs } from 'projects/ng-aio-forms/src/test/index';

import { NgAioInputFormComponent } from './input.component';

@Component({
  selector: 'test-btn',
  template: `<div>
    <ng-aio-input (onChange)="onChange($event)"></ng-aio-input>
  </div>`,
})
class InputWrapComponent {
  public lastEvent = '';
  public onChange(event: {value:string,id:string}) {
    this.lastEvent = event.value;
  }
}
describe('Input test', () => {
  let baseTestComponent = new BaseAbstractGridSpecs<InputWrapComponent>();

  baseTestComponent.init(NgAioInputFormComponent, InputWrapComponent);
  baseTestComponent.baseTest();

  it('It should emit input on input value change', fakeAsync(() => {
    const input =
      baseTestComponent.fixture.debugElement.nativeElement.querySelector(
        'input'
      );
    const spyChildEmitEvent = spyOn(
      baseTestComponent.child as NgAioInputFormComponent,
      'emit'
    ).and.callThrough();
    const spyParentOnSubmit = spyOn(
      baseTestComponent.component,
      'onChange'
    ).and.callThrough();

    input.value = 'someValue';
    input.dispatchEvent(new Event('input'));

    expect(spyChildEmitEvent).toHaveBeenCalled();
    expect(spyParentOnSubmit).toHaveBeenCalled();
    expect(baseTestComponent.component.lastEvent).toBe('someValue');
  }));
});
