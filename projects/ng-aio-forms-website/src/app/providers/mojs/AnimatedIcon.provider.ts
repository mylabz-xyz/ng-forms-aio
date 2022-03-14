import { Injectable } from '@angular/core';
import { Burst, Timeline } from '@mojs/core';

@Injectable({ providedIn: 'root' })
export class AnimatedIcon {
  public checked = false;
  public timeline = new Timeline();
  public options: { [key: string]: any } = {
    tweens: [new Burst({} as never)],
    onCheck: function () {
      return false;
    },
    onUnCheck: function () {
      return false;
    },
  };
  public el!: HTMLElement;

  public init(element: HTMLElement, options: any) {
    this.el = element;
    this.options = this.extend({}, this.options);
    this.extend(this.options, options);

    this.checked = false;

    this.timeline = new mojs.Timeline();

    for (let i = 0, len = this.options['tweens'].length; i < len; ++i) {
      this.timeline.add(this.options['tweens'][i]);
    }

    this.el.addEventListener(this.clickHandler, () => {
      if (this.checked) {
        this.options['onUnCheck']();
      } else {
        this.options['onCheck']();
        this.timeline.replay();
      }
      this.checked = !this.checked;
    });
  }

  private extend(a: { [key: string]: any }, b: { [key: string]: any }) {
    for (const key in b) {
      if (b.hasOwnProperty(key)) {
        a[key] = b[key];
      }
    }
    return a;
  }

  // taken from mo.js demos
  private clickHandler =
    this.isIOSSafari() || this.isTouch() ? 'touchstart' : 'click';
  // taken from mo.js demos
  private isIOSSafari() {
    const userAgent = window.navigator.userAgent;
    return userAgent.match(/iPad/i) || userAgent.match(/iPhone/i);
  }

  // taken from mo.js demos
  private isTouch() {
    const isIETouch =
      navigator.maxTouchPoints > 0 || (navigator as any).msMaxTouchPoints > 0;
    return [].indexOf.call(window, 'ontouchstart' as never) >= 0 || isIETouch;
  }
}
