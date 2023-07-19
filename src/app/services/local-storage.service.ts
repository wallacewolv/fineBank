import { Injectable } from '@angular/core';

export type LayoutType = {
  progress: Array<string>;
  todo: Array<string>;
  done: Array<string>;
  isChecked: boolean;
};

@Injectable({
  providedIn: 'root',
})
export class LocalStorageService {
  public layoutDefault: LayoutType = {
    progress: ['goals', 'total-balance', 'upcomming-bills'],
    todo: ['recent-transaction'],
    done: ['statistic', 'expenses-breakdown'],
    isChecked: false,
  };

  public layoutDefined!: LayoutType;

  constructor() {}

  getLayoutOnStorage(): LayoutType {
    const dataLocalstorage = localStorage.getItem('layout');
    const dataToggle = localStorage.getItem('toggle');

    if (dataLocalstorage === 'undefined' || !dataLocalstorage) {
      return this.layoutDefault;
    } else {
      const dataParse: LayoutType = JSON.parse(dataLocalstorage as string);
      const toggleParse: boolean = JSON.parse(dataToggle as string);
      this.layoutDefined = {
        progress: dataParse.progress,
        todo: dataParse.todo,
        done: dataParse.done,
        isChecked: toggleParse,
      };
      return dataParse;
    }
  }

  setLayoutOnStorage() {
    const dataStringfy = JSON.stringify(this.layoutDefined);
    localStorage.setItem('layout', dataStringfy);
  }
}
