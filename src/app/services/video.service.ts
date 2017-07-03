import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Video } from '../models/video';
import { GlobalService } from '../services/global.service';

import 'rxjs/add/operator/toPromise';
import { Subject } from 'rxjs/Subject';

declare var io:any;

@Injectable()
export class VideoService {
  currentVideo: Video;
  videos: Video[];

  currentVideoChanged = new Subject<Video>();

  constructor(
    private http: Http,
    private global: GlobalService
  ) {}

  embedStartTime(video: Video) {
    return video ? Math.max(Math.floor((this.global.INIT_TIME - new Date(video.startTime).getTime()) / 1000), 0) : 0;
  }

  add(video: Video, sendOverWire = true): void {
    if (sendOverWire) {
      this.addByKey('', video.key)
        .then((newVideo: Video) => {
          this.setCurrentVideo();
        });
    } else {
      this.videos.push(video)
    }
  }

  setCurrentVideo(): void {
    this.currentVideo = this.videos.find((v) => v.playing);
    this.currentVideoChanged.next(this.currentVideo);
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


  skip() {
    return this.http.post(`${this.global.API_URL}/api/skip`, {
        username: ''
      })
      .toPromise()
      .catch(this.handleError);
  }

  remove(video: Video): Promise<any> {
    return this.http.delete(`${this.global.API_URL}/api/remove`, {
        params: {
          user: '',
          id: video.id
        }
      })
      .toPromise()
      .then(() => {
        let foundVideo = this.videos.find(v => v.id === video.id);

        this.videos.splice(this.videos.indexOf(foundVideo), 1);
      })
      .catch(this.handleError);
  }

  handleError(error) {
    console.log(error);
  }

}
