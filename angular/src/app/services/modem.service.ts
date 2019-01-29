import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { ModemQuery } from '../models/table.query.model';
import { ModemEkleModel, ModemListeleModel } from '../models/modem.model';
import { query } from '@angular/core/src/render3/instructions';

@Injectable()

export class ModemService {
constructor(private http: HttpClient) { }
private url = 'http://localhost:5000/api/modem/';

  modemEkle(kazan: ModemEkleModel) {
    return this.http.post(this.url, kazan);
  }
  modemListeleBySiteId(id:string){
    return this.http.get<any>(this.url,{
      params: new HttpParams()
      .set('pageSize','100')
      .set('page','1')
      .set('sortBy','')
      .set('isSortAscending', 'false')
      .set('filter','')
      .set('siteId',id)
    });
  }
  modemListele(queryObject: ModemQuery) {
    console.log('aha girdi', queryObject);
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
  modemGetir(id:string) {
    return this.http.get<any>(this.url+id);
  }
  modemDuzenle(modem:ModemListeleModel){
      return this.http.put(this.url,modem);
  }
}
