import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { DefaultListArray } from './../../models';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  public langs = [
    { value: 'fr', label: 'french' },
    { value: 'en', label: 'english' },
  ];

  public mainRouter: DefaultListArray = [
    { label: 'home', value: '/' },
    { label: 'doc', value: 'doc' },
    { label: 'faq', value: 'faq' },
    { label: 'about', value: 'about' },
    { label: 'github', value: 'github' },
    { label: 'npm', value: 'npm' },
  ];

  constructor(private translateService: TranslateService) {}

  ngOnInit(): void {}

  public setTranslation(lang: string) {
    this.translateService.setDefaultLang(lang);
  }
}
