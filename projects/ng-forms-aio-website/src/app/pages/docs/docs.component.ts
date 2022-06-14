import { Component } from '@angular/core';
import { DocFiles } from 'projects/ng-forms-aio-website/src/assets/doc';

@Component({
  selector: 'app-docs',
  templateUrl: './docs.component.html',
  styleUrls: ['./docs.component.scss']
})
export class DocsComponent {
  public links = DocFiles;
}
