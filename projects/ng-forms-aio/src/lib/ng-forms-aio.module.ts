import { ModuleWithProviders, NgModule } from '@angular/core';
import { NgFormsAioComponent } from './ng-forms-aio.component';
import {
  NgAioCheckboxFormComponent,
  NgAioInputFormComponent,
  NgAioSelectFormComponent,
  NgAioInputTextBoxComponent,
  AbstractComponent,
  NgAioCheckboxListFormComponent,
  ButtonComponent
} from './components';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgFormsAioConfig, NgFormsAioService, NG_FORMS_AIO_CONFIG_TOKEN } from './ng-forms-aio.service';
import { BehaviorSubject } from 'rxjs';

@NgModule({
  declarations: [
    NgFormsAioComponent,
    NgAioCheckboxFormComponent,
    NgAioInputFormComponent,
    NgAioSelectFormComponent,
    NgAioInputTextBoxComponent,
    NgAioCheckboxListFormComponent,
    AbstractComponent,
    ButtonComponent
  ],
  imports: [BrowserModule, ReactiveFormsModule],
  exports: [
    NgFormsAioComponent,
    NgAioCheckboxFormComponent,
    NgAioInputFormComponent,
    NgAioSelectFormComponent,
    NgAioInputTextBoxComponent,
    NgAioCheckboxListFormComponent,
    AbstractComponent,
    ButtonComponent
  ],
  providers:[NgFormsAioService]
})
export class NgFormsAioModule {
  static forRoot(config: NgFormsAioConfig): ModuleWithProviders<NgFormsAioModule> {
    return {
      ngModule: NgFormsAioModule,
      providers: [{ provide: NG_FORMS_AIO_CONFIG_TOKEN, useValue: new BehaviorSubject(config) }]
    };
  }
}
