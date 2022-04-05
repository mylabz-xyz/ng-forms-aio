import { AfterViewInit, Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { AnimatedLinkProvider } from './providers';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements AfterViewInit {
  title = 'ng-aio-forms-website';

  constructor(private translateService: TranslateService) {
    translateService.setDefaultLang('en');
  }

  ngAfterViewInit(): void {
    this.listenScroll();
  }

  private listenScroll() {
    const debounce = (fn: Function) => {
      var frame: any;
      return (...params: any) => {
        if (frame) {
          cancelAnimationFrame(frame);
        }
        frame = requestAnimationFrame(() => {
          fn(...params);
        });
      };
    };
    const storeScroll = () => {
      document.documentElement.dataset['scroll'] = window.scrollY as any;
    };

    document.addEventListener('scroll', debounce(storeScroll.bind(this)), {
      passive: true,
    });
    storeScroll.bind(this)();
  }
}
