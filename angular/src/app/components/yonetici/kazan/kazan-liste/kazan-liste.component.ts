import { Component, OnInit, ViewChild, AfterViewInit, ElementRef } from '@angular/core';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
import { KazanService } from '../../../../services/kazan.service';
import { KazanListeModel, KeyValuePair } from '../../../../models/kazan.model';
import { TableQuery,KazanQuery } from '../../../../models/table.query.model';
import { fromEvent } from 'rxjs/observable/fromEvent';
import { debounceTime, distinctUntilChanged, tap } from 'rxjs/operators';
import { merge } from 'rxjs/observable/merge';
import { Site } from '../../../../models/site.model';
import { SiteService } from '../../../../services/site.service';

@Component({
  selector: 'app-kazan-liste',
  templateUrl: './kazan-liste.component.html',
  styleUrls: ['./kazan-liste.component.css']
})
export class KazanListeComponent implements OnInit, AfterViewInit {

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild('inputFilter') inputFilter: ElementRef;
  @ViewChild('inputSite') inputSite: ElementRef;
  siteler: Array<{item1: String, item2: String}>;
  selectedSite:any ;

  displayedColumns = ['adi', 'isiIstasyonuVarMi', 'boylerKalorimetre',
  'daireKalorimetre', 'daireSicakSuSayaci',
  , 'daireSoğukSuSayaci', 'dairePayOlcer' , 'site.adi', 'islemler'];
  dataSource: MatTableDataSource<Object>;
  queryObject = new KazanQuery(1, 5, ' ', true, '');

  kazanlar: Array<KazanListeModel>;
  toplamElemanSayisi?: Number;

  constructor(private kazanService: KazanService, private siteService: SiteService) {
    siteService.siteIsimveIdleriGetir().subscribe((result: any) => {
      this.siteler = result;
    });
  }
  ngOnInit(): void {
  }
  /**
   * Set the paginator and sort after the view init since this component will
   * be able to query its view for the initialized paginator and sort.*/

  ngAfterViewInit() {
    //this.initTable();

    fromEvent(this.inputFilter.nativeElement, 'keyup')
    .pipe(
      debounceTime(150),
      distinctUntilChanged(),
      tap(() => {
          this.paginator.pageIndex = 0;
          this.refreshTable();
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
  onSiteChange(siteId: string){
    this.queryObject.siteId = siteId;
    if(siteId!==''){
      this.selectedSite = this.siteler.find(s=>s.item1 === siteId).item2;
      this.initTable();
    }
    else this.resetTable();

  }

  private refreshTable() {
    this.sort.active = this.sort.active === undefined ? 'adi' : this.sort.active;
    // set the query values of query object
    this.queryObject.pageSize = this.paginator.pageSize;
    this.queryObject.page = this.paginator.pageIndex + 1;
    this.queryObject.isSortAscending = true;
    this.queryObject.filter = this.inputFilter.nativeElement.value;
    this.queryObject.sortBy = this.sort.active;

    if (this.sort.direction === 'asc') {
      this.queryObject.isSortAscending = true ;
    } else { this.queryObject.isSortAscending = false ; }

    this.kazanService.kazanListele(this.queryObject).subscribe(result => {
      this.kazanlar = result.items;
      this.dataSource = new MatTableDataSource(this.kazanlar);

    });
  }
  private resetTable(){
    this.dataSource = new MatTableDataSource();

  }




  private initTable() {
    this.kazanService.kazanListele(this.queryObject).subscribe((result) => {
      if(result !==null){
        this.kazanlar = result.items;
        this.toplamElemanSayisi = result.totalItems;
        this.dataSource = new MatTableDataSource(this.kazanlar);
        this.dataSource.paginator = this.paginator;
       this.dataSource.sort = this.sort;
      }
    },(err)=>{
      this.resetTable();
    });
  }

}
