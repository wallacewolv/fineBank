import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SharedService {
  private menunDataSubject: BehaviorSubject<string> =
    new BehaviorSubject<string>('Overview');
  public menunData$: Observable<string> = this.menunDataSubject.asObservable();

  updatemenunData(value: string) {
    this.menunDataSubject.next(value);
  }
}
