import {
  CdkDragDrop,
  moveItemInArray,
  transferArrayItem,
} from '@angular/cdk/drag-drop';
import { Component, OnInit } from '@angular/core';
import { DataSharingService } from 'src/app/services/data-sharing.service';

import { LocalStorageService } from '../../services/local-storage.service';

@Component({
  selector: 'fbank-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  topArray!: Array<string>;
  centerArray!: Array<string>;
  bottomArray!: Array<string>;
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
    const data = this.localStorageService.getDataOnStorage();

    if (data.isChecked) {
      this.topArray = this.localStorageService.layoutDefault.topArray;
      this.centerArray = this.localStorageService.layoutDefault.centerArray;
      this.bottomArray = this.localStorageService.layoutDefault.bottomArray;
      this.isChecked = data.isChecked;
    } else {
      this.topArray = data.topArray;
      this.centerArray = data.centerArray;
      this.bottomArray = data.bottomArray;
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
      topArray: this.topArray,
      centerArray: this.centerArray,
      bottomArray: this.bottomArray,
      isChecked: this.isChecked,
    };
  }

  setLayoutData() {
    const data = this.isChecked
      ? this.localStorageService.layoutDefined
      : this.localStorageService.layoutDefault;

    this.topArray = data.topArray;
    this.centerArray = data.centerArray;
    this.bottomArray = data.bottomArray;
  }
}
