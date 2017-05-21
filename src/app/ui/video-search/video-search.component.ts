import { Component, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { VideoSearch } from '../../models/video-search';
import { Video } from '../../models/video';
import { VideoService } from '../../services/video.service';

declare var $:any;
declare var moment:any;

@Component({
  selector: 'video-search',
  templateUrl: './video-search.component.html',
  styleUrls: ['./video-search.component.scss']
})
export class VideoSearchComponent implements AfterViewInit {
  @ViewChild('selectElem') el: ElementRef;
  @ViewChild('searchInput') searchInput: ElementRef;

  constructor(
    private videoService: VideoService
  ) { }
  
  ngAfterViewInit() {
    let videoService = this.videoService;
    let el = this.el.nativeElement;
    let searchInput = this.searchInput.nativeElement;

    $(el)
      .search({
        minCharacters: 3,
        onSelect(result: VideoSearch, response: VideoSearch[]) {
          // if (result.playlistId) {
          //   $scope.addPlaylist(result.playlistId)
          //     .then(() => {
          //       $('.ui.search input').val('');
          //     });
          // }
          videoService.addByKey('test test test', result.key)
            .then(() => searchInput.value = '');
        },
        apiSettings: {
          onResponse(videos: Video[]) {
            return {
              results: $.map(videos, (v) => {
                let vs = new VideoSearch();
                let titleText = v.playlistId ? v.playlistItems + ' videos' : moment.duration(v.duration).format('H:mm:ss');
                
                vs.title = `${v.title} (${titleText})`;
                vs.image = v.thumbnail;
                vs.key = v.key;
                vs.duration = v.duration;

                return vs;
              })
            };
          },
          url: 'http://localhost:1337/api/search?query={query}&maxResults=10'
        }
      });
  }

}
