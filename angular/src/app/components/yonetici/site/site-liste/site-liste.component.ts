import { Component, OnInit, ViewChild, AfterViewInit, ElementRef } from '@angular/core';
import { MatSort, MatPaginator, MatTableDataSource } from '@angular/material';
import { SiteService } from '../../../../services/site.service';
import { Site } from '../../../../models/site.model';
import { merge } from 'rxjs/observable/merge';
import { tap, debounceTime, distinctUntilChanged } from 'rxjs/operators';
import { TableQuery } from '../../../../models/table.query.model';
import { fromEvent } from 'rxjs/observable/fromEvent';
@Component({
  selector: 'app-site-liste',
  templateUrl: './site-liste.component.html',
  styleUrls: ['./site-liste.component.css']
})
export class SiteListeComponent implements OnInit, AfterViewInit {

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild('input') input: ElementRef;


  displayedColumns = ['adi', 'il', 'ilce', 'tel', 'islemler'];
  dataSource: MatTableDataSource<Object>;
  siteler: Array<Site>;
  toplamELemanSayisi?: Number;
  constructor(private siteService: SiteService) {

  }
  ngOnInit(): void {
  }
  /**
   * Set the paginator and sort after the view init since this component will
   * be able to query its view for the initialized paginator and sort.*/

  ngAfterViewInit() {

    const queryObject = new TableQuery(0, 5, '', true, '');
    this.initTable(queryObject);

  // server side filter
  fromEvent(this.input.nativeElement, 'keyup')
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
private initTable(queryObject: TableQuery) {
  this.siteService.siteleriGetir(queryObject).subscribe(result => {
    this.siteler = result.items;
    this.toplamELemanSayisi = result.totalItems;
    this.dataSource = new MatTableDataSource(this.siteler);
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }
);
}

// tabloyu yenile
private refreshTable() {
  // eğer aktif elemanı undefined olursa hata veriyor bu yüzden başlangıç değeri verilmelidir
  this.sort.active = this.sort.active === undefined ? 'adi' : this.sort.active ;
  const queryObject: TableQuery = new TableQuery(
    this.paginator.pageIndex + 1,
    this.paginator.pageSize,
    this.sort.active, true,
    this.input.nativeElement.value
    );
  if (this.sort.direction === 'asc') {
    queryObject.isSortAscending = true;
  } else { queryObject.isSortAscending = false; }



  this.siteService.siteleriGetir(queryObject).subscribe(result => {
    this.siteler = result.items;
    this.dataSource = new MatTableDataSource(this.siteler);
});
}



}





