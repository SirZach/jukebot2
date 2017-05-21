import { Component, OnInit } from '@angular/core';
import { VideoService } from '../../services/video.service';
import { GlobalService } from '../../services/global.service';
import { WebsocketService } from '../../services/websocket.service';

declare var io:any;

@Component({
  selector: 'currently-playing',
  templateUrl: './currently-playing.component.html',
  styleUrls: ['./currently-playing.component.scss'],
  host: {
    '[class.ui]': 'true',
    '[class.card]': 'true',
    '[class.w-100]': 'true'
  }
})
export class CurrentlyPlayingComponent implements OnInit {

  constructor(
    private videoService: VideoService,
    private globalService: GlobalService,
    private websocketService: WebsocketService
  ) {

  }

  ngOnInit() {

  }

}
