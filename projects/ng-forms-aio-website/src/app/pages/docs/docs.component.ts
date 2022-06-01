import { Component } from '@angular/core';

@Component({
  selector: 'app-docs',
  templateUrl: './docs.component.html',
  styleUrls: ['./docs.component.scss'],
})
export class DocsComponent {
  public docItems: [{ label: string; value: string }] = [
    { label: '', value: '' },
  ];
}
