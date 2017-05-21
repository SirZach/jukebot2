import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Video } from '../models/video';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class VideoService {
  API_URL = 'http://localhost:1337';
  YOUTUBE_URL = 'https://www.youtube.com/watch?v=';

  constructor(
    private http: Http
  ) { }

  addByKey(user: string, key: string): Promise<any> {
    return this.http.post(
        `${this.API_URL}/api/add`,
        JSON.stringify({
          link: `${this.YOUTUBE_URL}${key}`,
          user
        })
      )
      .toPromise()
      .catch(this.handleError)
  }

  handleError(error) {
    console.log(error);
  }

}
