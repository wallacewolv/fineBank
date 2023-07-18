import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fbank-draggable',
  templateUrl: './draggable.component.html',
  styleUrls: ['./draggable.component.scss']
})
export class DraggableComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  dragEnabled: boolean = false;

  toggleDragAndDrop() {
    this.dragEnabled = !this.dragEnabled;
    console.log(this.dragEnabled);
  }

  progress = ['goals', 'total-balance', 'upcomming-bills'];


  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    }
    console.log(`Progress: ${this.progress}`);
  }

}
