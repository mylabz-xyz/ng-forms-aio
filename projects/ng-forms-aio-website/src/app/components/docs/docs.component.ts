import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { MarkdownProvider } from '../../providers';

@Component({
  selector: 'app-doc',
  templateUrl: './docs.component.html',
  styleUrls: ['./docs.component.scss']
})
export class DocsComponent implements OnInit {
  @Input() path: string = '/assets/doc/';
  @Input() lang: string = '/assets/doc/';

  public id!: String;

  private id_default = 'started';

  constructor(
    public route: ActivatedRoute,
    private markdownProvider: MarkdownProvider,
    private translateService: TranslateService
  ) {}

  ngOnInit(): void {
    this.translateService.onLangChange.subscribe(i18n => {
      console.log(i18n.lang);
      console.log(i18n.translations);
    });
    this.id = this.route.snapshot.paramMap.get('id') as string;

    if (!this.id) {
      this.id = this.id_default;
    }

    this.markdownProvider.formatTitle();
  }
}
