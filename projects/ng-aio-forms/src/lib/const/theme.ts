export const Themes = {
  'float-label-default': {
    inputClass: 'float-label-default',
    focusClass: 'focus-border',
  },
  'float-label-border-center-to-edges': {
    inputClass: 'float-label-border-center-to-edges',
    focusClass: 'focus-border',
  },
  'float-label-border-edges-to-center': {
    inputClass: 'float-label-border-edges-to-center',
    focusClass: 'focus-border',
  },
  'float-label-borders': {
    inputClass: 'float-label-borders',
    focusClass: 'focus-border',
  },
  'float-label-borders-diagonal': {
    inputClass: 'float-label-borders-diagonal',
    focusClass: 'focus-border',
  },
  'float-label-borders-fill': {
    inputClass: 'float-label-borders-fill',
    focusClass: 'focus-border',
  },
  'float-label-background-slide': {
    inputClass: 'float-label-background-slide',
    focusClass: 'focus-bg',
  },
  'float-label-background-appear': {
    inputClass: 'float-label-background-appear',
    focusClass: 'focus-bg',
  },
  'border-default': {
    inputClass: 'border-default',
    focusClass: 'focus-border',
  },
  'border-center-to-edges': {
    inputClass: 'border-center-to-edges',
    focusClass: 'focus-border',
  },
  'border-edges-to-center': {
    inputClass: 'border-edges-to-center',
    focusClass: 'focus-border',
  },
  'border-reveal': { inputClass: 'border-reveal', focusClass: 'focus-border' },
  'border-slide': { inputClass: 'border-slide', focusClass: 'focus-border' },
  'border-slide-invert': {
    inputClass: 'border-slide-invert',
    focusClass: 'focus-border',
  },
  'borders-default': {
    inputClass: 'borders-default',
    focusClass: 'focus-border',
  },
  'borders-diagonal': {
    inputClass: 'borders-diagonal',
    focusClass: 'focus-border',
  },
  'borders-fill': { inputClass: 'borders-fill', focusClass: 'focus-border' },
  'background-fade': { inputClass: 'background-fade', focusClass: 'focus-bg' },
  'background-slide': {
    inputClass: 'background-slide',
    focusClass: 'focus-bg',
  },
  'background-center-to-edges': {
    inputClass: 'background-center-to-edges',
    focusClass: 'focus-bg',
  },
  'background-edges-to-center': {
    inputClass: 'background-edges-to-center',
    focusClass: 'focus-bg',
  },
  'background-appear': {
    inputClass: 'background-appear',
    focusClass: 'focus-bg',
  },
  'background-fill': { inputClass: 'background-fill', focusClass: 'focus-bg' },
};

export type NgAioTheme = keyof typeof Themes;
