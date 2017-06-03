import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { BehaviorSubject } from 'rxjs/Rx';

class Listener {
  realname: string;
  username: string
}
@Injectable()
export class ListenerService {
  listeners: Listener[];
  // listeners:BehaviorSubject<any[]> = new BehaviorSubject<any[]>([]);

  // listenersChanged = this.listeners.asObservable();

  constructor() {
    this.listeners = [];
  }

  // setListeners(listenersObj) {
  //   this.listeners.next(Object.keys(listenersObj).reduce((prev, key) => {
  //     prev.push(listenersObj[key]);
  //     return prev;
  //   }, []));
  //   // this.listenersChanged.next(this.listeners);
  // }
  setListeners(listenersObj) {
    this.listeners.push(new Listener());
    // this.listeners = Object.keys(listenersObj)
    //   .reduce((prev, key) => {
    //     prev.push(listenersObj[key] as Listener);
    //     return prev;
    //   }, []);
      console.log(this.listeners.length);
  }
}
