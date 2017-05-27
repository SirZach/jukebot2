import { Component, ViewChild, ElementRef, Input } from '@angular/core';
import { VideoService } from '../../services/video.service';
import { GlobalService } from '../../services/global.service';
import { Video } from '../../models/video';

declare var io:any;
declare var $:any;

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
export class CurrentlyPlayingComponent {
  @Input() video: Video;
  @ViewChild('embed') embed: ElementRef;

  constructor(
    private videoService: VideoService,
    private globalService: GlobalService,
  ) {
    videoService.currentVideoChanged.subscribe(
      video => this.embedVideo(video)
    );
  }

  embedVideo(video: Video) {
    let embed = this.embed.nativeElement;

    if (video) {
      $(embed).embed({
        url: video ? `//www.youtube.com/embed/${video.key}` : '',
        autoplay: true,
        parameters: {
          start: this.videoService.embedStartTime(video)
        }
      });
      $('.ui.dropdown').dropdown();

      // let $playing = $('#video-list .yellow').closest('playlistitem');

      // if ($playing.length) {
      //   $playing[0].scrollIntoView({
      //     behavior: 'smooth'
      //   });
      // }
    };
  }

}
