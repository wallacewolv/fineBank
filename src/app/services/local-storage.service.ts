import { Injectable } from '@angular/core';

export type LayoutType = {
  progress: Array<string>;
  todo: Array<string>;
  done: Array<string>;
};

@Injectable({
  providedIn: 'root',
})
export class LocalStorageService {
  public layoutDefault: LayoutType = {
    progress: ['goals', 'total-balance', 'upcomming-bills'],
    todo: ['recent-transaction'],
    done: ['statistic', 'expenses-breakdown'],
  };

  public layoutDefined!: LayoutType;

  constructor() {}

  getLayoutOnStorage(): LayoutType {
    const dataLocalstorage = localStorage.getItem('layout');
    if (dataLocalstorage === 'undefined' || !dataLocalstorage) {
      return this.layoutDefault;
    } else {
      const dataParse = JSON.parse(dataLocalstorage as string);
      this.layoutDefined = dataParse;
      return dataParse;
    }
  }

  setLayoutOnStorage() {
    const dataStringfy = JSON.stringify(this.layoutDefined);
    localStorage.setItem('layout', dataStringfy);
  }
}
