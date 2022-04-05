import { NgModule } from '@angular/core';
import { NgAioFormsComponent } from './ng-aio-forms.component';
import {
  NgAioCheckboxFormComponent,
  NgAioInputFormComponent,
  NgAioSelectFormComponent,
  NgAioInputTextBoxComponent,
  AbstractComponent,
  NgAioCheckboxListFormComponent,
  ButtonComponent,
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
    NgAioCheckboxListFormComponent,
    AbstractComponent,
    ButtonComponent,
  ],
  imports: [BrowserModule,ReactiveFormsModule],
  exports: [
    NgAioFormsComponent,
    NgAioCheckboxFormComponent,
    NgAioInputFormComponent,
    NgAioSelectFormComponent,
    NgAioInputTextBoxComponent,
    NgAioCheckboxListFormComponent,
    AbstractComponent,
    ButtonComponent,
  ],
})
export class NgAioFormsModule {}
