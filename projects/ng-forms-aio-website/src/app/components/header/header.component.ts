import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { DefaultListArray } from './../../models';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  public langs = [
    { value: 'fr', label: 'french' },
    { value: 'en', label: 'english' }
  ];

  public mainRouter: DefaultListArray = [
    { label: 'home', value: '/' },
    { label: 'doc', value: 'doc/introduce' },
    { label: 'components', value: 'components' },
    { label: 'experimental', value: 'experimental' },
    { label: 'about', value: 'about' }
  ];

  constructor(public router: Router, private translateService: TranslateService) {}

  ngOnInit(): void {}

  public setTranslation(lang: string) {
    this.translateService.use(lang);
  }
}
