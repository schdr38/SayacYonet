

import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Sayac } from '../models/sayac.model';
import { TableQuery } from '../models/table.query.model';

@Injectable()
export class SayacService {
  private url = 'http://localhost:5000/api/sayac/';
  /**
   *
   */
  constructor(private http: HttpClient) {
  }
  sayacListele(blokId: string, queryObject: TableQuery) {
    console.log('queryObject',queryObject);
    return this.http.get<any>(this.url, {
      params: new HttpParams()
        .set('pageSize', queryObject.pageSize.toString())
        .set('page', queryObject.page.toString())
        .set('sortBy', queryObject.sortBy)
        .set('isSortAscending', queryObject.isSortAscending.toString())
        .set('filter', queryObject.filter)
        .set('blokId', blokId)
    });
  }
  sayacEkle(sayac: Sayac) {
    return this.http.post(this.url, sayac);
  }
  sayacGetir(id: String) {
    return this.http.get(this.url + id);
  }
  sayacDuzenle(sayac: Sayac) {
    return this.http.put(this.url + 'duzenle', sayac);
  }
}
