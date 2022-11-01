import { AfterViewChecked, Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges, ViewChild } from '@angular/core';
import { CodemirrorComponent } from '@ctrl/ngx-codemirror';

import 'codemirror/mode/javascript/javascript.js';
import { BehaviorSubject } from 'rxjs';
@Component({
  selector: 'app-exemples',
  templateUrl: './exemples.component.html',
  styleUrls: ['./exemples.component.scss']
})
export class ExemplesComponent implements OnInit,OnChanges {
  @Input() data?: any;
  @Input() stringify?: boolean;
  @Input() reloadData?: BehaviorSubject<boolean>;
  @Input() _class: string = '';
  @Output() inputChange = new EventEmitter();
  @ViewChild('editor') editor!: CodemirrorComponent;

  private textArea!: HTMLTextAreaElement;

  @Input() options: CodemirrorComponent['options'] = {
    lineNumbers: true,
    theme: 'material',
    mode: 'javascript',
    viewportMargin: 23
  };

  public exemple = '';

  ngOnInit(): void {
    this.exemple = this.stringify ? JSON.stringify(this.data, null, '\t') : this.data;

  }

ngOnChanges(changes: SimpleChanges): void {
    this.editor.codeMirror!.refresh();
}

  public onInputChange(value: any) {
    this.inputChange.emit(JSON.parse(value));
  }
}
