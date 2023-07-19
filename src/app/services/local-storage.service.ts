import { Injectable } from '@angular/core';

export type LayoutType = {
  topArray: Array<string>;
  centerArray: Array<string>;
  bottomArray: Array<string>;
  isChecked: boolean;
};

@Injectable({
  providedIn: 'root',
})
export class LocalStorageService {
  public layoutDefault: LayoutType = {
    topArray: ['total-balance', 'goals', 'upcomming-bills'],
    centerArray: ['recent-transaction'],
    bottomArray: ['statistic', 'expenses-breakdown'],
    isChecked: false,
  };

  public layoutDefined!: LayoutType;

  constructor() {}

  getDataOnStorage(): LayoutType {
    const dataLocalstorage = localStorage.getItem('layout');
    const dataToggle = localStorage.getItem('toggle');

    if (dataLocalstorage === 'undefined' || !dataLocalstorage) {
      return this.layoutDefault;
    } else {
      const dataParse: LayoutType = JSON.parse(dataLocalstorage as string);
      const toggleParse: boolean = JSON.parse(dataToggle as string);
      this.layoutDefined = {
        topArray: dataParse.topArray,
        centerArray: dataParse.centerArray,
        bottomArray: dataParse.bottomArray,
        isChecked: toggleParse,
      };
      return dataParse;
    }
  }

  setDataOnStorage() {
    const dataStringfy = JSON.stringify(this.layoutDefined);
    localStorage.setItem('layout', dataStringfy);
  }
}
