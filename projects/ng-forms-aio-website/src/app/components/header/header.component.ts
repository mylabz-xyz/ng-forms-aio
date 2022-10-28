import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { DefaultListArray } from './../../models';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  public langs = [
    { value: 'fr', label: 'french' },
    { value: 'en', label: 'english' }
  ];

  public mainRouter: DefaultListArray = [
    { label: 'Home', value: '/' },
    { label: 'Doc', value: 'doc/introduce' },
    { label: 'Components', value: 'components/forms-aio' },
  ];

  constructor(public router: Router, private translateService: TranslateService) {}

  public setTranslation(lang: string) {
    this.translateService.use(lang);
  }

  public openTab(link:string){
    window.open(link,'_blank')
  }
}
