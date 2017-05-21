import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
  host: {
    '[class.ui]': 'true',
    '[class.card]': 'true'
  }
})
export class CardComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
