import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Video } from '../models/video';
import { GlobalService } from '../services/global.service';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class VideoService {
  currentVideo: Video;
  videos: Video[];

  constructor(
    private http: Http,
    private global: GlobalService
  ) { }

  add(video: Video) {
    debugger;
    this.videos.push(video);
    this.setCurrentVideo
  }

  setCurrentVideo(): void {
    this.currentVideo = this.videos.find((v) => v.playing);
  }

  addByKey(user: string, key: string): Promise<any> {
    return this.http.post(
        `${this.global.API_URL}/api/add`,
        JSON.stringify({
          link: `${this.global.YOUTUBE_URL}${key}`,
          user
        })
      )
      .toPromise()
      .catch(this.handleError)
  }

  get(): Promise<Video[]> {
    return this.http.get(`${this.global.API_URL}/api/start`)
      .toPromise()
      .then((res) => res.json().videos as Video[])
      .then((videos) => {
        this.videos = videos;
        this.setCurrentVideo();

        return videos;
      })
      .catch(this.handleError);
  }

  handleError(error) {
    console.log(error);
  }

}
