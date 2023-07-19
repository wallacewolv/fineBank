import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable()
export class DataSharingService {
  private booleanDataSubject: BehaviorSubject<boolean> =
    new BehaviorSubject<boolean>(false);
  public booleanData$: Observable<boolean> =
    this.booleanDataSubject.asObservable();

  updateBooleanData(value: boolean) {
    this.booleanDataSubject.next(value);
  }
}
