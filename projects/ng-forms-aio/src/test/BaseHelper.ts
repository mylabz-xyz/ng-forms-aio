import { DebugElement, Type } from '@angular/core';
import { ComponentFixture } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

export const _ANNOTATIONS = '__annotations__';
export const _PARAMETERS = '__parameters__';
export const _PROP_METADATA = '__prop__metadata__';

export const byCss = (fixture: any, selector: string) => {
  if ((fixture as ComponentFixture<any>)?.debugElement)
    return (fixture as ComponentFixture<any>).debugElement.query(
      By.css(selector)
    );

  return (fixture as DebugElement).query(By.css(selector));
};

export const byDirective = (
  fixture: ComponentFixture<any>,
  directive: Type<any>
) => fixture.debugElement.query(By.directive(directive));
