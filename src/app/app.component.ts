import { Component, OnInit } from '@angular/core';

import { GlobalService } from './services/global.service';
import { VideoService } from './services/video.service';
import { Video } from './models/video';

declare var io:any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  constructor(
    private globalService: GlobalService,
    private videoService: VideoService,
  ) { }

  ngOnInit() {
    this.globalService.socket = io.sails.connect(this.globalService.WS_URL);
    this.globalService.socket.get('/api/subscribeVideos', (body: any, JWR: any) => {});
    this.globalService.socket.on('video', (body: any, JWR: any) => {
      if (body.verb === 'created') {
        this.videoService.add(body.data as Video);
      }
    });
    this.videoService.get();
  }
}
