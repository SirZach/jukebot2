import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'related-playlist',
  templateUrl: './related-playlist.component.html',
  styleUrls: ['./related-playlist.component.scss'],
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
export class RelatedPlaylistComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
