import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot, Router, RouterStateSnapshot } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
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

  private id_default = 'started';

  constructor(
    public route: ActivatedRoute,
    private router: Router,
    private markdownProvider: MarkdownProvider,
    private translateService: TranslateService
  ) {}

  ngOnInit(): void {
    this.translateService.onLangChange.subscribe(i18n => {});

    this.router.events
      .pipe(
        filter((event: any) => event?.snapshot),
        debounceTime(400)
      )
      .subscribe((event: any) => {
        this.id = this.route.snapshot.paramMap.get('id') as string;
        console.log(this.id);
        this.markdownProvider.formatTitle();
      });
  }
}
