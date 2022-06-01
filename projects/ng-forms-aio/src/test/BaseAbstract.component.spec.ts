import { Component, DebugElement, Type } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { byCss } from './index';
import { AbstractComponent } from '../lib';
import { _ANNOTATIONS } from './BaseHelper';
import { Themes } from '../lib/const';

export type _ExtendedComponent = Component & AbstractComponent

export class BaseAbstractGridSpecs<T> {
  public component!: T;
  public fixture!: ComponentFixture<T>;
  public child!: _ExtendedComponent;
  public childDebug!: DebugElement;
public  init  (child: any, parent: unknown)  {
    beforeEach(async () => {
      // refine the test module by declaring the test component
      await TestBed.configureTestingModule({
        declarations: [child, parent, AbstractComponent],
        imports: [BrowserModule, ReactiveFormsModule],
      }).compileComponents();

      // create component and test fixture
      this.fixture = TestBed.createComponent(parent as Type<T>);
      // get test component from the fixture
      this.component = this.fixture.componentInstance;


      this.fixture.detectChanges();

      this.childDebug = byCss(this.fixture,child[_ANNOTATIONS][0]['selector'] as string)
      this.child = this.childDebug.componentInstance

    });
  };

  public baseTest() {
    describe(`Base test :`, () => {
      it(`It should create the component`, () => {
        expect(this.component).toBeTruthy();
      });
    });

    describe(`Base test : Child should have herited opts from AbstractComponent`, () => {
      it(`It should create the component`, () => {
        expect(this.child.theme).toBeDefined();
        expect(this.child.themes).toBe(Themes);
        expect(this.child.value).toBeDefined();
        expect(this.child.isSubmitted).toBeDefined();
        expect(this.child.required).toBeDefined();
        expect(this.child._id).toBeDefined();
        expect(this.child._idMarker).toBeDefined();
      });
    });
  }


}
