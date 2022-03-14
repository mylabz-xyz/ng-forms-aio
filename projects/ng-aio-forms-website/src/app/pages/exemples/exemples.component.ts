import {
  AfterViewInit,
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
import { CodemirrorComponent } from '@ctrl/ngx-codemirror';

import 'codemirror/mode/javascript/javascript.js';
import { BehaviorSubject } from 'rxjs';
@Component({
  selector: 'app-exemples',
  templateUrl: './exemples.component.html',
  styleUrls: ['./exemples.component.scss'],
})
export class ExemplesComponent implements OnInit {
  @Input() data?: any;
  @Input() reloadData?: BehaviorSubject<boolean>;
  @Output() inputChange = new EventEmitter();
  @ViewChild('editor') editor!: CodemirrorComponent;

  private textArea!: HTMLTextAreaElement;

  public options: CodemirrorComponent['options'] = {
    lineNumbers: true,
    theme: 'material',
    mode: 'javascript',
  };

  public exemple = '';

  ngOnInit(): void {
    this.exemple = JSON.stringify(this.data, null, '\t');
  }

  public onInputChange(value: any) {
    this.inputChange.emit(JSON.parse(value));
  }
}
