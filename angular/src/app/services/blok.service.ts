

import { Injectable } from '@angular/core';
import { Blok, BlokListeleModel } from '../models/blok.model';
import { HttpClient, HttpParams } from '@angular/common/http';
import { TableQuery, BlokQuery } from '../models/table.query.model';

@Injectable()

export class BlokService {
constructor(private http: HttpClient) { }
url = 'http://localhost:5000/api/blok/';
  blokEkle(blok: Blok) {
    return this.http.post(this.url, blok);
  }
  blokGetir(id) {
    return this.http.get(this.url + id);
  }
  blokDuzenle(blok: BlokListeleModel) {
    console.log('blok', blok);
    return this.http.put(this.url + 'duzenle', blok);
  }
  blokListele(queryObject: BlokQuery) {
    console.log('queryObject', queryObject);
    return this.http.get<any>(this.url, {
      params: new HttpParams()
        .set('pageSize', queryObject.pageSize.toString())
        .set('page', queryObject.page.toString())
        .set('sortBy', queryObject.sortBy)
        .set('isSortAscending', queryObject.isSortAscending.toString())
        .set('filter', queryObject.filter)
        .set('siteId',queryObject.siteId)
    });
  }
  blokDuzenleModelGetir(id: String ) {
    return this.http.get(this.url+id);
  }
  blokIdVeIsimleriGetir(id: String) {
    return this.http.get(this.url + 'idVeIsimleriGetir');
  }
  blokListeleBySiteId(siteId: string) {
    return this.http.get<any>(this.url, {
    params: new HttpParams()
      .set('siteId', siteId)
      .set('page', '1')
      .set('pageSize', '50')
    });
  }

}
