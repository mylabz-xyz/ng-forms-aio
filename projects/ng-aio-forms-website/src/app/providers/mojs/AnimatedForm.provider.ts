import { Injectable } from '@angular/core';
import { Burst, Shape } from '@mojs/core';

@Injectable({ providedIn: 'root' })
export class AnimatedFormProvider {
  private square = new Shape({
    radius: 500,
    x: 175,
    y: -35,
    radiusY: 70,
    shape: 'rect',
    stroke: '#FF0000',
    strokeWidth: { 10: 20 },
    fill: 'none',
    scale: { 0.45: 0.55 },
    opacity: { 1: 0 },
    duration: 350,
    easing: 'sin.out',
    isShowEnd: false,
  });

  private lines = new Burst({
    left: 50,
    top: -35,
    //@ts-ignore
    radius: { 75: 120 },
    angle: 0,
    count: 8,
    children: {
      shape: 'line',
      radius: 10,
      scale: 1,
      stroke: '#FF0000',
      strokeDasharray: '100%',
      strokeDashoffset: { '-100%': '100%' },
      duration: 700,
      easing: 'quad.out',
    },
  });

  private ctx: any;

  public fireBurst(element: HTMLElement) {
    const position = element.getBoundingClientRect();

    const timeline = new mojs.Timeline({ speed: 1.5 });

    timeline.add(this.square, this.lines);

    this.square.tune({
      left: position.left + 35,
      top: position.top + 35,
    });
    this.lines.tune({
      x: position.left + 35,
      y: position.top + 35,
    });

    if ('vibrate' in navigator) {
      navigator.vibrate =
        navigator.vibrate ||
        (navigator as any)['webkitVibrate'] ||
        (navigator as any)['mozVibrate'] ||
        (navigator as any)['msVibrate'];
      navigator.vibrate([100, 200, 400]);
    }

    timeline.play();
  }

  public getCtx() {
    return this.ctx;
  }
}
