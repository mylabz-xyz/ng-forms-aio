import { Type } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgFormsAioModule } from '../lib';

export class AppGridSpecs<T> {
  public component!: T;
  public fixture!: ComponentFixture<T>;
  public async init(declarations: any, component: unknown) {
    // refine the test module by declaring the test component
    await TestBed.configureTestingModule({
      declarations: [NgFormsAioModule],
      providers: [],
      imports: [BrowserModule, ReactiveFormsModule],
    }).compileComponents();

    // create component and test fixture
    this.fixture = TestBed.createComponent(component as Type<T>);

    // get test component from the fixture
    this.component = this.fixture.componentInstance;
  }

  public baseTest() {
    describe(`Base test on`, () => {
      it(`should create the component`, () => {
        expect(this.component).toBeTruthy();
      });
    });
  }
}
