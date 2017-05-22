import { Component, OnInit } from '@angular/core';
import { Video } from '../../models/video';
import { VideoService } from '../../services/video.service';

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
  constructor(
    private videoService: VideoService
  ) { }

  ngOnInit() {
  }

}
