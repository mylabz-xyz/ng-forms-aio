import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent {
  @Input() items: [{ label: string; value: string }] = [
    { label: '', value: '' },
  ];

  constructor(public router:Router){}
}
