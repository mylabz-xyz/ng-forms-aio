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
    return (
      '<h' +
      level +
      '>' +
      '<a class="markdown_anchor" name="' +
      escapedText +
      ' href="' +
      document.URL +
      '#' +
      escapedText +
      '">' +
      text +
      '<span class="markdown_anchor_sigle">#</span>' +
      '</a>' +
      '</h' +
      level +
      '>'
    );
  }
}
