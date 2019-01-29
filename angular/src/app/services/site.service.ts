import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import { Site } from '../models/site.model';
// tslint:disable-next-line:import-blacklist
import 'rxjs/Rx';
import { map } from 'rxjs/operators';
import { DataSource } from '@angular/cdk/table';
import { filter } from 'rxjs/operator/filter';
import { query } from '@angular/core/src/animation/dsl';
import { TableQuery } from '../models/table.query.model';
@Injectable()

export class SiteService {
url = 'http://localhost:5000/api/sites/';
constructor(private http: HttpClient) { }

  siteleriGetir(queryObject: TableQuery) {
    return this.http.get<any>(this.url, {
      params: new HttpParams()
        .set('pageSize', queryObject.pageSize.toString())
        .set('page', queryObject.page.toString())
        .set('sortBy', queryObject.sortBy)
        .set('isSortAscending', queryObject.isSortAscending.toString())
        .set('filter', queryObject.filter = queryObject.filter === undefined ? '' : queryObject.filter)
    });
  }
  siteEkle(site: Site) {
    return this.http.post(this.url, site);
  }
  siteGetir(id: string) {
    return this.http.get<Site>(this.url + id);
  }
  siteDuzenle(Id: String, site: Site) {
    console.log('ıd', Id, 'site', site);

    return this.http.put(this.url + Id, site);
  }
  siteIsimveIdleriGetir() {
  return this.http.get(this.url + 'namesAndIds');
  }

}
