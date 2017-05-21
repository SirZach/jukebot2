import { Component, OnInit } from '@angular/core';
import { Video } from '../../models/video';

@Component({
  selector: 'upcoming-playlist',
  templateUrl: './upcoming-playlist.component.html',
  styleUrls: ['./upcoming-playlist.component.scss'],
  host: {
    '[class.ui]': 'true',
    '[class.items]': 'true',
    '[class.bottom]': 'true',
    '[class.attached]': 'true',
    '[class.active]': 'true',
    '[class.tab]': 'true',
    '[class.segment]': 'true'
  }
})
export class UpcomingPlaylistComponent implements OnInit {
  videos: Video[];
  // ws: $WebSocket;

  constructor() {
    // this.ws = new $WebSocket('ws://localhost:1337/api/subscribeVideos');
  }

  ngOnInit() {
    // this.ws.onMessage(
    //   (msg: MessageEvent) => {
    //     console.log('onMessage', msg.data);
    //   }
    // )
  }

}
