import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MarkdownProvider } from '../../providers';

@Component({
  selector: 'app-doc',
  templateUrl: './docs.component.html',
  styleUrls: ['./docs.component.scss']
})
export class DocsComponent implements OnInit {
  public id!: String;

  private id_default = "started"

  constructor(public route: ActivatedRoute,private markdownProvider:MarkdownProvider) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id') as string;

    if(!this.id){
      this.id = this.id_default
    }


    this.markdownProvider.formatTitle()
  }
}
