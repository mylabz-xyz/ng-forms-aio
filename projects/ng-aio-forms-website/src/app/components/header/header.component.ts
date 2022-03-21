import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

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

  constructor(private translateService: TranslateService) {}

  ngOnInit(): void {}

  public setTranslation(lang: string) {
    this.translateService.setDefaultLang(lang);
  }
}
