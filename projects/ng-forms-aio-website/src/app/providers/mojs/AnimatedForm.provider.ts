import { Injectable } from '@angular/core';
import { Burst, Shape, addShape, CustomShape, Timeline } from '@mojs/core';
import { _xlink, _path } from '.';

class _Card extends CustomShape {
  getShape() {
    return _xlink('about-1');
  }
}

@Injectable({ providedIn: 'root' })
export class AnimatedFormProvider {
  private ctx: any;

  private timeLine!: Timeline;

  public initShape() {
    this.timeLine = new mojs.Timeline();

    addShape('_FormCard', _Card);

    const icon = new mojs.Shape({
      parent: document.getElementById('_formSVG') as HTMLElement,
      shape: '_FormCard',
      fill: { cyan: 'deeppink' },
      stroke: { cyan: 'deeppink' },
      strokeWidth: 20,
      isShowStart: true,
      scale: { 0: 1 },
      x: 0,
      y: 0,
      duration: 4000,
    });
    this.timeLine.add(icon);

    this.timeLine.play();
  }

  public getCtx() {
    return this.ctx;
  }
}
