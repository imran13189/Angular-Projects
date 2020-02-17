import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';

@Injectable({
  providedIn: 'root'
})
export class LoginsuccessService {

  constructor() { }

  private _listners = new Subject<any>();

  listen(): Observable<any> {
    return this._listners.asObservable();
  }

  filter(filterBy: string) {
    this._listners.next(filterBy);
  }
}
