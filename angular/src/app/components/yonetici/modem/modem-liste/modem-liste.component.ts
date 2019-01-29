import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { SiteService } from '../../../../services/site.service';
import { MatTableDataSource, MatPaginator, MatSort } from '@angular/material';
import { ModemService } from '../../../../services/modem.service';
import { ModemQuery } from '../../../../models/table.query.model';
import { ModemListeleModel } from '../../../../models/modem.model';

@Component({
  selector: 'app-modem-liste',
  templateUrl: './modem-liste.component.html',
  styleUrls: ['./modem-liste.component.css']
})
export class ModemListeComponent implements OnInit,AfterViewInit {
  
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort; 
  siteler =  new Array<{item1: string, item2: string}>();
  selectedSite:string
  displayedColumns = ['site', 'kazan', 'imeiNo',
  'telNo', 'Durum','islemler'];
  dataSource: MatTableDataSource<Object>;
  toplamElemanSayisi = 0;
  queryObject:ModemQuery = new ModemQuery(1,10,'',true,'');
  modemler:Array<ModemListeleModel>;
  
  constructor(siteService:SiteService,private modemService:ModemService) {
    siteService.siteIsimveIdleriGetir().subscribe((result:any)=>{
      this.siteler  = result;
    })
   }

  ngOnInit() {
  }
  ngAfterViewInit(): void {

  }

  onSiteChange(siteId: string){
    if(siteId !== '')
    {this.selectedSite = this.siteler.find(s=>s.item1 === siteId).item2;

    this.queryObject.siteId = siteId;
    this.modemService.modemListele(this.queryObject).subscribe((result)=>{
      this.modemler = result.items;
      this.toplamElemanSayisi = result.totalItems;
      this.dataSource = new MatTableDataSource(this.modemler);
      this.dataSource.paginator = this.paginator;
     this.dataSource.sort = this.sort;
    
    },(error)=>{
      this.resetTable();
      if(error.status === 404)
      throw TypeError("Modem bulunamadı");

    })
  
  }
  else this.resetTable();
  }
  resetTable(){
    this.dataSource = new MatTableDataSource();
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

}
