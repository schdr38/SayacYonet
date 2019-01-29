import { Component, OnInit, AfterViewInit, ElementRef, ViewChild } from '@angular/core';
import { fromEvent } from 'rxjs/observable/fromEvent';
import { debounceTime, distinctUntilChanged, tap } from 'rxjs/operators';
import { merge } from 'rxjs/observable/merge';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
import { BlokListeleModel } from '../../../../models/blok.model';
import { BlokService } from '../../../../services/blok.service';
import { TableQuery, BlokQuery } from '../../../../models/table.query.model';
import { SiteService } from '../../../../services/site.service';

@Component({
  selector: 'app-blok-liste',
  templateUrl: './blok-liste.component.html',
  styleUrls: ['./blok-liste.component.css']
})
export class BlokListeComponent implements OnInit, AfterViewInit {

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild('inputSiteler') inputSiteler: ElementRef;

  displayedColumns = ['blokNo', 'blokAdi', 'site',
  'kazanDairesi', , 'daireSayisi', 'kapaliAlan'
  , 'yonetici', 'yoneticiTel' ,   'islemler'];
  dataSource: MatTableDataSource<Object>;
  queryObject = new BlokQuery(1, 5, ' ', true, '');
  siteler = new Array<{item1: String, item2: String}>();

  bloklar: Array<BlokListeleModel>;
  public toplamElemanSayisi?: Number;

  constructor(private blokService: BlokService, private siteService: SiteService) {
    this.siteService.siteIsimveIdleriGetir().subscribe((siteler) => {
      this.siteler =  siteler as Array<{item1: String, item2: String}>;
    });
  }
  ngOnInit(): void {
  }
  /**
   * Set the paginator and sort after the view init since this component will
   * be able to query its view for the initialized paginator and sort.*/

  ngAfterViewInit() {
    fromEvent(this.inputSiteler.nativeElement, 'change')
    .pipe(
      debounceTime(150),
      distinctUntilChanged(),
      tap(() => {
        if(this.inputSiteler.nativeElement.value == '')
          this.paginator.pageIndex = 0;
          this.initTable();
      })
  )
  .subscribe();

  merge(this.sort.sortChange, this.paginator.page)
  .pipe(tap(() => {

    this.refreshTable();
  })
)
  .subscribe();



  }

  private setQueryObject() {
    this.sort.active = this.sort.active === undefined ? 'adi' : this.sort.active;
    // set the query values of query object
    this.queryObject.pageSize = this.paginator.pageSize;
    this.queryObject.page = this.paginator.pageIndex + 1;
    this.queryObject.isSortAscending = true;
    this.queryObject.sortBy = this.sort.active;
  }

  private refreshTable() {

    this.setQueryObject();
    if (this.sort.direction === 'asc') {
      this.queryObject.isSortAscending = true ;
    } else { this.queryObject.isSortAscending = false ; }

    this.blokService.blokListele(this.queryObject).subscribe(result => {
      this.bloklar = result.items;
      this.dataSource = new MatTableDataSource(this.bloklar);
    });
  }


  private resetTable(){
    this.dataSource = new MatTableDataSource();

  }


  initTable() {
    this.queryObject.siteId = this.inputSiteler.nativeElement.value;
    this.blokService.blokListele(this.queryObject).subscribe((result) => {
      if(result !== null){  
      this.bloklar = result.items;
      this.toplamElemanSayisi = result.totalItems;
      this.dataSource = new MatTableDataSource(this.bloklar);
      this.dataSource.paginator = this.paginator;
     this.dataSource.sort = this.sort;
    }
    else {
      this.resetTable();
    }

    },(err)=>{
      this.resetTable();
    });
  }

}
