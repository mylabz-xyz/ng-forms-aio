import { Component } from '@angular/core';
import { AbstractWithForm } from './../../abstract';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.scss'],
})
export class IntroComponent extends AbstractWithForm {
  constructor() {
    super();
  }
}
