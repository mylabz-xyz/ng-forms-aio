import {
  CustomShape,
  addShape,
  Shape,
  easing,
  Timeline,
  stagger,
  ShapeOptions,
  Burst,
  h,
  Tween,
} from '@mojs/core';
import { AnimatedIcon } from './AnimatedIcon.provider';
import { increase, scale } from './utils';

export * from './AnimatedForm.provider';
export * from './AnimatedIcon.provider';
export * from './AnimatedLink.provider'

const COLORS = {
  white: '#ffffff',
  black: '#000000',
  green: '#49F2CC',
  lightGrey: '#777',
  grey: '#29363B',
  cyan: 'cyan',
  yellow: '#FFE202',
  hotpink: 'deeppink',
};

const HIDE_THEN = {
  delay: 930,
  isShowEnd: false,
};

// return svg path
export const _path = (d: string) => `<path  d="${d}"></path>`;
export const _xlink = (d: string) => `<use xlink:href="#${d}" />`;

// ADD CUSTOM SHAPES
class _Input extends CustomShape {
  getShape() {
    return _path('');
  }
}
class _TextArea extends CustomShape {
  getShape() {
    return _path('');
  }
}
class _Label extends CustomShape {
  getShape() {
    return _path(
      'm167.56 278.51h71.227c2.3203 0 4.543-0.92188 6.1875-2.5625 1.6406-1.6406 2.5625-3.8672 2.5625-6.1875v-30.273c0-2.3203-0.92187-4.5469-2.5625-6.1875-1.6445-1.6406-3.8672-2.5625-6.1875-2.5625h-71.227c-4.832 0-8.75 3.918-8.75 8.75v30.273c0 4.832 3.918 8.75 8.75 8.75zm8.75-30.273h53.727v12.773h-53.727z'
    );
  }
}
class _Submit extends CustomShape {
  getShape() {
    return _path('');
  }
}

class _Rules extends CustomShape {
  getShape() {
    return _path('');
  }
}

export function initShape() {
  addShape('Input', _Input);
  addShape('Label', _Label);
  addShape('Rules', _Rules);
  addShape('Submit', _Submit);
  addShape('TextArea', _TextArea);
}
