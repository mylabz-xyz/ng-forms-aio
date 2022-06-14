import { Injectable } from '@angular/core';
import { MarkdownService } from 'ngx-markdown';

@Injectable({ providedIn: 'root' })
export class MarkdownProvider {
  constructor(private markdownService: MarkdownService) {}

  public formatTitle() {
    this.markdownService.renderer.heading = this._heading;
  }























  // utils

  private _heading(text: string, level: number): string {
    const escapedText = text.toLowerCase().replace(/[^\w]+/g, '-');
    console.log( '<h' +
    level +
    '>' +
    '<a name="' +
    escapedText +
    '" class="anchor" href="#' +
    escapedText +
    '">' +
    '<span class="header-link"></span>' +
    '</a>' +
    text +
    '</h' +
    level +
    '>')
    return (
      '<h' +
      level +
      '>' +
      '<a name="' +
      escapedText +
      '" class="anchor" href="#' +
      escapedText +
      '">' +
      '<span class="header-link"></span>' +
      '</a>' +
      text +
      '</h' +
      level +
      '>'
    );
  }
}
