import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
import {
  NzDropDownADirective,
  NzDropdownButtonDirective,
  NzDropDownDirective,
  NzDropdownMenuComponent,
} from 'ng-zorro-antd/dropdown';

interface _item {
  value: any;
  label: any;
}

@Component({
  selector: 'app-zorro-dropdown',
  templateUrl: './zorro-dropdown.component.html',
  styleUrls: ['./zorro-dropdown.component.scss'],
})
export class ZorroDropdownComponent implements OnInit {
  @Input() items!: _item[];
  @Input() isSvgBtn?: boolean;
  @Input() svgFolder: string = '';
  @Input() svgSelectedPattern: string = '';
  @Input() svgNotSelectedPattern: string = '';
  @Input() defaultSelectedItem!: _item;

  @Output() isItemSelected: EventEmitter<_item> = new EventEmitter();

  @ViewChild('menu') nzDropdownMenu!: NzDropdownMenuComponent;

  public selectedItem!: _item;

  ngOnInit(): void {
    this.selectedItem = this.defaultSelectedItem;
  }

  public isSelected(item: _item) {
    this.selectedItem = item;
    this.isItemSelected.emit(this.selectedItem);
  }
}
