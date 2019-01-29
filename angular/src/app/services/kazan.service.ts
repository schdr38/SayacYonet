import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import { Site } from '../models/site.model';
import { KazanEkleModel, KazanListeModel, KazanDuzenleModel} from '../models/kazan.model';
import { TableQuery, KazanQuery } from '../models/table.query.model';

@Injectable()

export class KazanService {
constructor(private http: HttpClient) { }
url = 'http://localhost:5000/api/kazan/';
  kazanListele(queryObject: KazanQuery) {
    console.log('queryObject', queryObject);
    return this.http.get<any>(this.url, {
      params: new HttpParams()
        .set('pageSize', queryObject.pageSize.toString())
        .set('page', queryObject.page.toString())
        .set('sortBy', queryObject.sortBy)
        .set('isSortAscending', queryObject.isSortAscending.toString())
        .set('filter', queryObject.filter = queryObject.filter === undefined ? '' : queryObject.filter)
        .set('siteId',queryObject.siteId)
    });
  }
  kazanEkle(kazan: KazanEkleModel) {
    return this.http.post(this.url, kazan);
  }
  kazanGetir(id) {
    return this.http.get(this.url + id);
  }
  kazanDuzenle(kazan: KazanDuzenleModel) {
    console.log('kazan', kazan);
    return this.http.put(this.url + kazan.id, kazan);
  }
  kazanlarGetirSiteIdIle(id: string) {
    return this.http.get<any>(this.url,{
    params: new HttpParams()
      .set('siteId',id)
      .set('pageSize','100')
  });
  }

}
