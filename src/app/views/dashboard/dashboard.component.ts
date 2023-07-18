import { Component, OnInit } from '@angular/core';
import {
  CdkDrag,
  CdkDragDrop,
  moveItemInArray,
  transferArrayItem,
} from '@angular/cdk/drag-drop';

@Component({
  selector: 'fbank-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  constructor() {}
  ngOnInit(): void {}
  progress = ['goals', 'total-balance', 'upcomming-bills'];
  todo = ['recent-transaction'];
  done = ['statistic', 'expenses-breakdown'];
  arrayTwo = ['', '']

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
    console.log(`Todo: ${this.todo}`);
    console.log(`Done: ${this.done}`);
  }
}
