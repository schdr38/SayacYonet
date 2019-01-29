

import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { TableQuery } from '../models/table.query.model';
import { Daire } from '../models/daire.model';

@Injectable()
export class DaireService {
  private url = 'http://localhost:5000/api/daire/';
  /**
   *
   */
  constructor(private http: HttpClient) {
  }
  daireListele(blokId: string, queryObject: TableQuery) {
    console.log('queryObject', queryObject);
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
  daireEkle(daire: Daire) {
    return this.http.post(this.url, daire);
  }
  daireGetir(id: String) {
    return this.http.get(this.url + id);
  }
  daireDuzenle(daire: Daire) {
    return this.http.put(this.url + 'duzenle', daire);
  }
  daireListeleByBlokId(id:string) {
    const queryObject = new TableQuery(1,5000,'',false,'');
    return this.http.get<any>(this.url, {
    params: new HttpParams()
    .set('pageSize', queryObject.pageSize.toString())
    .set('page', queryObject.page.toString())
    .set('sortBy', queryObject.sortBy)
    .set('isSortAscending', queryObject.isSortAscending.toString())
    .set('filter', queryObject.filter)
    .set('blokId', id)
    });
  }
}
