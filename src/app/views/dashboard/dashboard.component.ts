import { Component, OnInit } from '@angular/core';
import {
  CdkDrag,
  CdkDragDrop,
  moveItemInArray,
  transferArrayItem,
} from '@angular/cdk/drag-drop';
import { DataSharingService } from 'src/app/services/data-sharing.service';

@Component({
  selector: 'fbank-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  progress = ['goals', 'total-balance', 'upcomming-bills'];
  todo = ['recent-transaction'];
  done = ['statistic', 'expenses-breakdown'];
  dragEnabled: boolean = true;

  constructor(private dataSharingService: DataSharingService) {}

  ngOnInit(): void {
    this.dataSharingService.booleanData$.subscribe(() => {
      this.dragEnabled = !this.dragEnabled;
    });
  }

  toggleDragAndDrop() {
    this.dragEnabled = !this.dragEnabled;
  }

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
