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
  ) {
    io.sails.url = this.globalService.WS_URL;
    io.socket.port = '1337';
  }

  ngOnInit() {
    io.socket.get('/api/subscribeVideos', (body: any, JWR: any) => {
      debugger;
      this.videoService.add(body as Video);
    });

    this.videoService.get();
  }
}
