import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { debounceTime, filter } from 'rxjs';

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
  public options = {
    displayMode: true,
    throwOnError: false,
    errorColor: '#cc0000'
  };

  private id_default = 'started';

  constructor(public route: ActivatedRoute, private router: Router, private markdownProvider: MarkdownProvider) {}

  ngOnInit(): void {
    this.firstLoad();

    this.router.events
      .pipe(
        filter((event: any) => event?.snapshot),
        debounceTime(400)
      )
      .subscribe((event: any) => {
        this.id = this.route.snapshot.paramMap.get('id') as string;
        this.markdownProvider.formatTitle();
      });
  }

  private firstLoad() {
    this.id = this.route.snapshot.paramMap.get('id') as string;
    this.markdownProvider.formatTitle();
  }
}
