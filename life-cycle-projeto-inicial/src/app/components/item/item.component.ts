import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { faPen, faTrash } from '@fortawesome/free-solid-svg-icons';
import { Item } from 'src/app/interfaces/iItem';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css'],
})
export class ItemComponent implements OnInit, OnChanges {
  faPen = faPen;
  faTrash = faTrash;

  @Input() item!: Item;
  constructor() {}

  ngOnInit(): void {}

  ngOnChanges() {
    console.log('OnChanges');
  }
}
