import { NgModule } from '@angular/core';
import { NgAioFormsComponent } from './ng-aio-forms.component';
import {
  NgAioCheckboxFormComponent,
  NgAioInputFormComponent,
  NgAioSelectFormComponent,
  NgAioInputTextBoxComponent,
  AbstractComponent,
} from './components';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  declarations: [
    NgAioFormsComponent,
    NgAioCheckboxFormComponent,
    NgAioInputFormComponent,
    NgAioSelectFormComponent,
    NgAioInputTextBoxComponent,
    AbstractComponent,
  ],
  imports: [ReactiveFormsModule, BrowserModule],
  exports: [
    NgAioFormsComponent,
    NgAioCheckboxFormComponent,
    NgAioInputFormComponent,
    NgAioSelectFormComponent,
  ],
})
export class NgAioFormsModule {}
