import { Component, OnInit } from '@angular/core';

import { CardImagesService } from '../../../services/index';

import { CardImage } from '../../../models/index';

@Component({
  selector: 'foil-sites',
  templateUrl: './sites.component.html',
  styleUrls: ['./sites.component.css']
})
export class SitesComponent implements OnInit {

  image: any;

  constructor(private _cardImagesService: CardImagesService) { }

  ngOnInit() {
    console.log('fire');
    this._cardImagesService.getCardImage('01.jpg').subscribe(
      result => {
        console.log('return');
        this.image = (<CardImage>result).image;
      }
    );
  }

}
