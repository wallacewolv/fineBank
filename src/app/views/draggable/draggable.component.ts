import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fbank-draggable',
  templateUrl: './draggable.component.html',
  styleUrls: ['./draggable.component.scss'],
})
export class DraggableComponent implements OnInit {
  constructor() {}

  ngOnInit() {}

  items = ['Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5'];
  targetItems = [];

  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.items, event.previousIndex, event.currentIndex);
  }
}
