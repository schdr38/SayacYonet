import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { SiteService } from '../../../../services/site.service';
import { BlokService } from '../../../../services/blok.service';
import { MatTableDataSource, MatPaginator, MatSort } from '@angular/material';
import { TableQuery } from '../../../../models/table.query.model';
import { Sayac } from '../../../../models/sayac.model';
import { SayacService } from '../../../../services/sayac.service';

@Component({
  selector: 'app-sayac-liste',
  templateUrl: './sayac-liste.component.html',
  styleUrls: ['./sayac-liste.component.css']
})
export class SayacListeComponent implements OnInit,AfterViewInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  queryObject:TableQuery
  siteler = new Array<{item1:string,item2:string}>();
  bloklar = new Array<{item1:string,item2:string}>();
  sayaclar = new Array<Sayac>();
  dataSource: MatTableDataSource<Object>;
  tplmElmnSayisi: Number;
  displayedColumns = ['daireNo','sayacTip','id1','id2','birim','sayacTuru','bIndex','boylerKalorimetre','okuma','okunmaDurum','fatura','modem','islemler'];


  constructor(siteService:SiteService,private blokService:BlokService,private sayacService:SayacService) {
    //site elemanlarını doldur
    siteService.siteIsimveIdleriGetir().subscribe((s:any)=>{
      console.log('siteler',s);
      this.siteler = s;
    })
  }
  
  ngOnInit() {
  }

  ngAfterViewInit(): void {

  }



  //site seçildiğinde çalışır
  onSiteChange(siteId:string){
    if(siteId === ''){
      //siteId boş iste blok listesini sıfırla
      this.resetBlokList();
    }
    else {
      this.blokService.blokListeleBySiteId(siteId).subscribe((blokResult)=>{

        console.log('bloklar',blokResult);
        this.bloklar = blokResult.items.map((b)=>{return {item1:b.id,item2:b.adi}})
      },(err)=>{
        //siteleri çekerken hata oluşursa listeyi sıfırla
        this.resetBlokList();
        throw err;
      })
    } 
  }
  onBlokChange(blokId:string){
    console.log(blokId)
    this.paginator.pageIndex = 0;
    this.initTableBySelectedBlok(blokId);
  }


  private initTableBySelectedBlok(id:string) {
    this.queryObject = new TableQuery( 1, 5, '', false, '');
    this.sayacService.sayacListele(id,this.queryObject).subscribe((result)=>{
      console.log('sonuc',result);
      this.sayaclar = result.items;
      this.tplmElmnSayisi = result.totalItems;
      this.dataSource = new MatTableDataSource(this.sayaclar);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    })

  }






  private resetBlokList(){
    delete this.bloklar;
  }



}
