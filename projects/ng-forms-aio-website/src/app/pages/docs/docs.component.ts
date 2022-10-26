import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DocFiles } from 'projects/ng-forms-aio-website/src/assets/doc';

@Component({
  selector: 'app-docs',
  templateUrl: './docs.component.html',
  styleUrls: ['./docs.component.scss']
})
export class DocsComponent {
  public links: typeof DocFiles = Object.values(DocFiles).filter(val => val.title);

  constructor(public router: Router) {}
}
