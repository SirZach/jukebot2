import { Component, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { VideoSearch } from '../models/video-search';
import { Video } from '../models/video';

declare var $:any;
declare var moment:any;

@Component({
  selector: 'video-search',
  templateUrl: './video-search.component.html',
  styleUrls: ['./video-search.component.scss'],
  host: {
    '[class.ui]': 'true',
    '[class.search]': 'true'
  }
})
export class VideoSearchComponent implements AfterViewInit {
  @ViewChild('selectElem') el: ElementRef;

  constructor() { }
  
  ngAfterViewInit() {
    $(this.el.nativeElement)
      .search({
        minCharacters: 3,
        onSelect(result, response) {
          if (result.playlistId) {
          //   $scope.addPlaylist(result.playlistId)
          //     .then(() => {
          //       $('.ui.search input').val('');
          //     });
          // } else {
          //   $scope.readd(result.key)
          //     .then(() => {
          //       $('.ui.search input').val('');
          //     });
          }
        },
        apiSettings: {
          onResponse(videos: Video[]) {
            return {
              results: $.map(videos, (v) => {
                let vs = new VideoSearch();
                let titleText = v.playlistId ? v.playlistItems + ' videos' : moment.duration(v.duration).format('H:mm:ss');
                
                vs.title = `${v.title} (${titleText})`;
                vs.image = v.thumbnail;
                return vs;
              })
            };
          },
          url: 'http://localhost:1337/api/search?query={query}&maxResults=10'
        }
      });
  }

}
