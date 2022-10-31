import { Component } from '@angular/core';
import { ComponentFixture, fakeAsync, TestBed } from '@angular/core/testing';
import { BaseAbstractGridSpecs } from 'projects/ng-forms-aio/src/test/index';
import { NgAioCheckboxFormComponent } from '..';

@Component({
  selector: 'test-checkbox',
  template: `<div>
    <ng-forms-aio-checkbox
      (onChange)="onChange($event)"
      [value]="value"
      [values]="values"
    ></ng-forms-aio-checkbox>
  </div>`,
})
class CheckBoxWrapComponent {
  public lastEvent: any = '';
  public value = '';
  public values = [
    { label: 'foo', value: 'foo' },
    { label: 'bar', value: 'bar' },
  ];
  public onChange(event: { value: string; id: string }) {
    this.lastEvent = event.value;
  }
}
describe('Checkbox Component :', () => {
  let baseTestComponent = new BaseAbstractGridSpecs<CheckBoxWrapComponent>();

  baseTestComponent.init(NgAioCheckboxFormComponent, CheckBoxWrapComponent);
  baseTestComponent.baseTest();

  it('It should emit foo on checkbox checked change', fakeAsync(() => {
    const input =
      baseTestComponent.fixture.debugElement.nativeElement.querySelector(
        'input'
      );
    const spyChildEmitEvent = spyOn(
      baseTestComponent.child as NgAioCheckboxFormComponent,
      'emit'
    ).and.callThrough();
    const spyParentOnSubmit = spyOn(
      baseTestComponent.component,
      'onChange'
    ).and.callThrough();

    input.click();

    expect(spyChildEmitEvent).toHaveBeenCalled();
    expect(spyParentOnSubmit).toHaveBeenCalled();
    expect(baseTestComponent.component.lastEvent).toBe('foo');
  }));

  it('It should get bar for initial value', () => {
    baseTestComponent.component.value = 'bar';

    baseTestComponent.fixture.detectChanges();

    const input =
      baseTestComponent.fixture.debugElement.nativeElement.querySelector(
        'input'
      );
    expect(input.value).toBe('foo');
  });
});
