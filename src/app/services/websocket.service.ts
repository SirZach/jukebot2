import { Injectable } from '@angular/core';
import { $WebSocket } from 'angular2-websocket/angular2-websocket'

@Injectable()
export class WebsocketService {
  ws: $WebSocket;

  constructor() {
    // this.ws = new $WebSocket('ws://localhost:1337');
  }

}
