import { Component } from '@angular/core';
import { ComponentFixture, fakeAsync, TestBed } from '@angular/core/testing';
import { BaseAbstractGridSpecs } from 'projects/ng-aio-forms/src/test/index';
import { NgAioCheckboxListFormComponent } from '..';

@Component({
  selector: 'test-checkbox-list',
  template: `<div>
    <ng-aio-checkbox-list
      (onChange)="onChange($event)"
      [value]="value"
      [values]="values"
    ></ng-aio-checkbox-list>
  </div>`,
})
class CheckBoxListWrapComponent {
  public lastEvent: any = '';
  public value :any= [];
  public values = [
    { label: 'foo', value: 'foo' },
    { label: 'bar', value: 'bar' },
  ];
  public onChange(event: { value: string; id: string }) {
    console.log(event);
    this.lastEvent = event.value;
  }
}
describe('Checkbox List Component :', () => {
  let baseTestComponent = new BaseAbstractGridSpecs<CheckBoxListWrapComponent>();

  baseTestComponent.init(NgAioCheckboxListFormComponent, CheckBoxListWrapComponent);
  baseTestComponent.baseTest();

  it('It should emit foo on checkbox checked change', fakeAsync(() => {
    const input =
      baseTestComponent.fixture.debugElement.nativeElement.querySelector(
        'input'
      );
    const spyChildEmitEvent = spyOn(
      baseTestComponent.child as NgAioCheckboxListFormComponent,
      'emit'
    ).and.callThrough();
    const spyParentOnSubmit = spyOn(
      baseTestComponent.component,
      'onChange'
    ).and.callThrough();

    input.click();

    expect(spyChildEmitEvent).toHaveBeenCalled();
    expect(spyParentOnSubmit).toHaveBeenCalled();
    expect(baseTestComponent.component.lastEvent).toEqual([{ label: 'foo', value: 'foo' }]);
  }));

  it('It should get bar for initial value', () => {
    baseTestComponent.component.value = [{value:'foo',label:"foo"}];
    baseTestComponent.fixture.detectChanges();

    const spyChildOnInit = spyOn(
      baseTestComponent.child,
      'ngOnInit'
    ).and.callThrough();
    baseTestComponent.child.ngOnInit()

    baseTestComponent.fixture.detectChanges();

    expect(baseTestComponent.component.lastEvent).toEqual([{ label: 'foo', value: 'foo' }])

    expect(spyChildOnInit).toHaveBeenCalled();

  });
});
