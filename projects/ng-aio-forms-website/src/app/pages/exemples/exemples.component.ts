import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CodemirrorComponent } from '@ctrl/ngx-codemirror';

import 'codemirror/mode/javascript/javascript.js';
@Component({
  selector: 'app-exemples',
  templateUrl: './exemples.component.html',
  styleUrls: ['./exemples.component.scss'],
})
export class ExemplesComponent implements OnInit {
  @Input() data?: any;
  @Output() inputChange = new EventEmitter();
  public options: CodemirrorComponent['options'] = {
    lineNumbers: true,
    theme: 'material',
    mode: 'javascript',
  };

  public exemple = '';

  ngOnInit(): void {
    this.exemple = JSON.stringify(this.data);
  }

  public onInputChange(value: any) {
    this.inputChange.emit(JSON.parse(value));
  }
}
