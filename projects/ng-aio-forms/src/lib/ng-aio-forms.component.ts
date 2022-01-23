import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { NgAioForms } from './models/NgAioForms';

@Component({
  selector: 'ng-aio-forms',
  template: `
    <div *ngFor="let form of forms">
      <ng-template [ngSwitch]="form.type">
        <ng-aio-select *ngSwitchCase="'select'"> </ng-aio-select>
        <ng-aio-input *ngSwitchCase="'input'"> </ng-aio-input>
        <ng-aio-checkbox *ngSwitchCase="'checkbox'"> </ng-aio-checkbox>
        <div *ngSwitchDefault>...</div>
      </ng-template>
    </div>
  `,
  styles: [],
})
export class NgAioFormsComponent implements OnInit {
  @Input() forms!: NgAioForms[];

  public _forms!: FormGroup;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this._forms = this.formBuilder.group(this.AioFormToForm());
  }

  private arrayToForm(formItem: any) {
    return this.formBuilder.array([]);
  }

  private AioFormToForm() {
    return this.forms.map(this.mapAioFormToFormBuilder);
  }

  private mapAioFormToFormBuilder() {}
}
