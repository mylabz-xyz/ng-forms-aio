import { Component } from '@angular/core';
import { ComponentFixture, fakeAsync, TestBed } from '@angular/core/testing';
import { BaseAbstractGridSpecs } from 'projects/ng-forms-aio/src/test/index';
import { NgAioSelectFormComponent } from '..';

@Component({
  selector: 'test-select',
  template: `<div>
    <ng-aio-select
      (onChange)="onChange($event)"
      [value]="value"
      [values]="values"
    ></ng-aio-select>
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
    this.lastEvent = event.value;
  }
}
describe('Select Component :', () => {
  let baseTestComponent = new BaseAbstractGridSpecs<CheckBoxListWrapComponent>();

  baseTestComponent.init(NgAioSelectFormComponent, CheckBoxListWrapComponent);
  baseTestComponent.baseTest();

  it('It should emit foo on checkbox checked change', fakeAsync(() => {
    const select =
      baseTestComponent.fixture.debugElement.nativeElement.querySelector(
        'select'
      );
    const spyChildEmitEvent = spyOn(
      baseTestComponent.child as NgAioSelectFormComponent,
      'emit'
    ).and.callThrough();
    const spyParentOnSubmit = spyOn(
      baseTestComponent.component,
      'onChange'
    ).and.callThrough();


    select.value= select.options[0].value;
    select.dispatchEvent(new Event('input'));

    baseTestComponent.fixture.detectChanges()

    expect(spyChildEmitEvent).toHaveBeenCalled();
    expect(spyParentOnSubmit).toHaveBeenCalled();
    expect(baseTestComponent.component.lastEvent).toEqual('foo');
  }));

  it('It should get bar for initial value', () => {
    baseTestComponent.component.value = "foo";
    baseTestComponent.fixture.detectChanges();

    const spyChildOnInit = spyOn(
      baseTestComponent.child,
      'ngOnInit'
    ).and.callThrough();
    baseTestComponent.child.ngOnInit()

    baseTestComponent.fixture.detectChanges();

    expect(baseTestComponent.component.lastEvent).toEqual("foo")

    expect(spyChildOnInit).toHaveBeenCalled();

  });
});
