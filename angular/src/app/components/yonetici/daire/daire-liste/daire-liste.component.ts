import { OnInit, AfterViewInit, ElementRef, ViewChild, Component } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material';
import { SiteService } from '../../../../services/site.service';
import { fromEvent } from 'rxjs/observable/fromEvent';
import { debounceTime } from 'rxjs/operators/debounceTime';
import { distinctUntilChanged } from 'rxjs/operators/distinctUntilChanged';
import { tap } from 'rxjs/operators/tap';
import { TableQuery } from '../../../../models/table.query.model';
import {  Daire } from '../../../../models/daire.model';
import { BlokService } from '../../../../services/blok.service';
import { merge } from 'rxjs/observable/merge';
import { DaireService } from '../../../../services/daire.service';
import { KeyValuePair } from '../../../../models/kazan.model';

@Component({
  selector: 'app-daire-liste',
  templateUrl: './daire-liste.component.html',
  styleUrls: ['./daire-liste.component.css']
})
export class DaireListeComponent implements OnInit, AfterViewInit {


  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild('bloklarInput') blokInput: ElementRef;
  dataSource: MatTableDataSource<Object>;

  siteler = new Array<{item1: String, item2: String}>();
  bloklar = new Array<{item1: String , item2: String}>();
  selectedSite = new KeyValuePair();
  selectedBlok = new KeyValuePair();
  daireler = new Array<Daire>();
  tplmElmnSayisi: Number;
  queryObject: TableQuery ;
  displayedColumns = ['kapiNo', 'adSoyad', 'blok', 'site', 'kapaliAlan', 'kiraciMi', 'islemler'];


  constructor(private siteService: SiteService, private blokService: BlokService, private daireService: DaireService) {
    this.siteService.siteIsimveIdleriGetir().subscribe((siteler) => {
      this.siteler = siteler as Array<{item1: String, item2: String}> ;
    });
   }
   onSiteChange(siteId: String) {
    if(siteId === '') delete this.bloklar
  else{
  this.dataSource = new MatTableDataSource([]);
  this.selectedSite.id = siteId.toString();
  this.blokService.blokListeleBySiteId(this.selectedSite.id).subscribe((result) => {
    this.bloklar = result.items.map((r) => {
      return {item1: r.id, item2: r.adi} ;
    });
   });
  }
  }

  ngOnInit() {
  }

  ngAfterViewInit(): void {
    // Blok seçilince burası çalışır
    fromEvent(this.blokInput.nativeElement, 'change')
    .pipe(
      debounceTime(150),
      distinctUntilChanged(),
      tap(() => {
     
        this.paginator.pageIndex = 0;
        this.initTableBySelectedBlok();
    })
  )
    .subscribe();

    merge(this.sort.sortChange, this.paginator.page)
    .pipe(tap(() => {
      this.queryObject.page = this.paginator.pageIndex + 1;
      this.queryObject.pageSize = this.paginator.pageSize ;
      this.daireService.daireListele(this.selectedBlok.id, this.queryObject).subscribe((result) => {
      this.daireler = result.items;
      this.dataSource = new MatTableDataSource(this.daireler);
      });
    })
    )
    .subscribe();
  }
  private resetTable(){
    
  }

  private initTableBySelectedBlok() {
    this.queryObject = new TableQuery( 1, 5, '', false, '');
    this.selectedBlok.id = this.blokInput.nativeElement.value;
    this.selectedBlok.adi = this.bloklar.find(b => b.item1 === this.selectedBlok.id).item2.toString();
    this.selectedSite.adi = this.siteler.find(s => s.item1 === this.selectedSite.id).item2.toString();
    this.daireService.daireListele(this.selectedBlok.id, this.queryObject).subscribe((result) => {
    this.daireler = result.items;
    this.tplmElmnSayisi = result.totalItems;
    this.dataSource = new MatTableDataSource(this.daireler);
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    });
  }

}
