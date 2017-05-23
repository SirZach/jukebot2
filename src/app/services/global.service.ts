import { Injectable } from '@angular/core';

@Injectable()
export class GlobalService {
  API_URL = 'http://localhost:1337';
  YOUTUBE_URL = 'https://www.youtube.com/watch?v=';
  WS_URL = 'http://localhost:1337';
  INIT_TIME = 0;

  constructor() {
    this.INIT_TIME = new Date().getTime();
  }

}
