import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Listener } from '../models/listener';

@Injectable()
export class ListenerService {
  listeners: Listener[];
  listenersChanged = new Subject<Listener[]>();

  constructor() {
    this.listeners = [];
  }

  setListeners(listenersObj) {
    this.listeners = Object.keys(listenersObj)
      .reduce((prev, key) => {
        prev.push(listenersObj[key] as Listener);
        return prev;
      }, []);
    this.listenersChanged.next(this.listeners);
  }
}
