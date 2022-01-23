import { NgModule } from '@angular/core';
import { NgAioFormsComponent } from './ng-aio-forms.component';
import {
  NgAioCheckboxFormComponent,
  NgAioInputFormComponent,
  NgAioSelectFormComponent,
} from './components';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    NgAioFormsComponent,
    NgAioCheckboxFormComponent,
    NgAioInputFormComponent,
    NgAioSelectFormComponent,
  ],
  imports: [ReactiveFormsModule],
  exports: [
    NgAioFormsComponent,
    NgAioCheckboxFormComponent,
    NgAioInputFormComponent,
    NgAioSelectFormComponent,
  ],
})
export class NgAioFormsModule {}
