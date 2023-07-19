import { Component, OnInit } from '@angular/core';
import {
  CdkDrag,
  CdkDragDrop,
  moveItemInArray,
  transferArrayItem,
} from '@angular/cdk/drag-drop';
import { DataSharingService } from 'src/app/services/data-sharing.service';
import {
  LayoutType,
  LocalStorageService,
} from '../../services/local-storage.service';

@Component({
  selector: 'fbank-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  progress!: Array<string>;
  todo!: Array<string>;
  done!: Array<string>;
  dragEnabled: boolean = true;
  toggleEnabled: boolean = true;
  isChecked!: boolean;

  constructor(
    private dataSharingService: DataSharingService,
    private localStorageService: LocalStorageService
  ) {}

  ngOnInit(): void {
    this.getLayoutInformation();

    this.dataSharingService.booleanData$.subscribe(() => {
      this.dragEnabled = !this.dragEnabled;
      this.toggleEnabled = !this.toggleEnabled;

      const navBar = document.querySelector(
        '.dashboard_nav_bar'
      ) as HTMLElement;

      navBar.style.height = this.toggleEnabled ? '103%' : '100%';

      this.localStorageService.layoutDefined.isChecked = this.isChecked;
    });
  }

  getLayoutInformation() {
    const data = this.localStorageService.getLayoutOnStorage();

    if (data.isChecked) {
      this.progress = this.localStorageService.layoutDefault.progress;
      this.todo = this.localStorageService.layoutDefault.todo;
      this.done = this.localStorageService.layoutDefault.done;
      this.isChecked = data.isChecked;
    } else {
      this.progress = data.progress;
      this.todo = data.todo;
      this.done = data.done;
      this.isChecked = data.isChecked;
    }
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
    this.localStorageService.layoutDefined = {
      progress: this.progress,
      todo: this.todo,
      done: this.done,
      isChecked: this.isChecked,
    };
  }

  setLayoutData() {
    const data = this.isChecked
      ? this.localStorageService.layoutDefined
      : this.localStorageService.layoutDefault;

    this.progress = data.progress;
    this.todo = data.todo;
    this.done = data.done;
  }
}
