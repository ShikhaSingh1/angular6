import { Injectable, Inject } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class DataEventService {

  private loggedIn = new BehaviorSubject(false);
  currentState = this.loggedIn.asObservable();

  constructor() { }

  changeLogInState(val: boolean) {
    this.loggedIn.next(val);
  }

}