import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { CardImage } from '../../models/index';

@Injectable()
export class CardImagesService {

  private baseUrl = 'http://localhost:60697/api/images/';

  constructor(private _http: Http) { }

  getCardImage(imageName: string): Observable<CardImage> {

    return this._http.get(`${this.baseUrl}${imageName}`).map((response: Response) => {
      const cardImage = new CardImage();
      cardImage.image = response.json();
      return cardImage;
    });
  }

}
