import { Type } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

export class BaseGridSpecs<T> {
  public component!: T;
  public fixture!: ComponentFixture<T>;
  init = (declarations: any, component: unknown) => {
    beforeEach(async () => {
      // refine the test module by declaring the test component
      await TestBed.configureTestingModule({
        declarations: [...declarations],
        imports: [BrowserModule, ReactiveFormsModule],
      }).compileComponents();

      // create component and test fixture
      this.fixture = TestBed.createComponent(component as Type<T>);
      // get test component from the fixture
      this.component = this.fixture.componentInstance;
      this.fixture.detectChanges();
    });
  };

  public baseTest() {
    describe(`Base test on `, () => {
      it(`should create the component`, () => {
        expect(this.component).toBeTruthy();
      });
    });
  }
}
