import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { DefaultListArray } from '../../models';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent {
  @Input() items:DefaultListArray= [
    { label: '', value: '' },
  ];

  @Input() mode: 'horizontal' | 'inline' = 'inline';

  constructor(public router: Router) {}
}
