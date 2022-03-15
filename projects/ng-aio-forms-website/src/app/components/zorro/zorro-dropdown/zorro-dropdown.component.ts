import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

interface _item {
  value: any;
  label: any;
}

@Component({
  selector: 'app-zorro-dropdown',
  templateUrl: './zorro-dropdown.component.html',
  styleUrls: ['./zorro-dropdown.component.scss'],
})
export class ZorroDropdownComponent {
  @Input() items!: _item[];
  @Input() isSvgBtn?: boolean;

  @Output() isItemSelected: EventEmitter<_item> = new EventEmitter();
  private selectedItem!: _item;

  public isSelected(item: _item) {
    this.selectedItem = item;
    this.isItemSelected.emit(this.selectedItem);
  }
}
