import { Component, OnInit } from '@angular/core';

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

  constructor() { }

  ngOnInit() {
  }

}
