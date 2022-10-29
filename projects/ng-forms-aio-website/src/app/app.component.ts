import { AfterViewInit, Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { AnimatedLinkProvider } from './providers';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit {
  title = 'ng-forms-aio-website';

  constructor(private translateService: TranslateService, private notification: NzNotificationService) {
    translateService.setDefaultLang('en');
  }

  ngAfterViewInit(): void {
    this.listenScroll();

    setTimeout(()=>{
      this.notification.create(
        'info',
        'Currently in development',
        'The first release of this library is scheduled for 2022-10-31.'
      );
    },1000)
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
      passive: true
    });
    storeScroll.bind(this)();
  }
}
