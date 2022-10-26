import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ComponentsFiles } from 'projects/ng-forms-aio-website/src/assets/doc/components';

@Component({
  selector: 'app-components',
  templateUrl: './components.component.html',
  styleUrls: ['./components.component.scss']
})
export class ComponentsComponent {
  public links = Object.values(ComponentsFiles).filter(val => val.title);

  constructor(public router: Router) {}
}
