import { Component, OnInit } from '@angular/core';
import { Sayac } from '../../../../models/sayac.model';
import { SiteService } from '../../../../services/site.service';
import { BlokService } from '../../../../services/blok.service';
import { ModemEkleModel } from '../../../../models/modem.model';
import { DaireService } from '../../../../services/daire.service';
import { ModemService } from '../../../../services/modem.service';
import { SayacService } from '../../../../services/sayac.service';

@Component({
  selector: 'app-sayac-ekle',
  templateUrl: './sayac-ekle.component.html',
  styleUrls: ['./sayac-ekle.component.css']
})
export class SayacEkleComponent implements OnInit {
  sayac = new Sayac();
  siteler = new Array<{item1:string,item2:string}>();
  bloklar = new Array<{item1:string,item2:string}>();
  daireler= new Array<{item1:string,item2:string}>();
  modemler= new Array<{item1:string,item2:string}>();
  tipler:Array<String>;
  constructor(private siteService :SiteService,private sayacService:SayacService,
    private blokService:BlokService,private modemService:ModemService,private daireService:DaireService) {
      this.tipler = this.sayac.tipler; 
      siteService.siteIsimveIdleriGetir().subscribe((result:any)=>{
       this.siteler = result;
      });
    }

  ngOnInit() {
  }
  onSubmit(form:HTMLFormElement){
    this.sayacService.sayacEkle(this.sayac).subscribe((result)=>{
      console.log('result',result)
    })
  }


  onSiteChange(siteId:string){
    this.resetAllInputs();
    if(siteId !== ''){
    this.blokService.blokListeleBySiteId(siteId).subscribe((bloklar:any)=>{
      if(bloklar !== null)
      this.bloklar = bloklar.items.map((b)=>{
        return {item1:b.id,item2:b.adi};
      });
    })
    this.modemService.modemListeleBySiteId(siteId).subscribe((result)=>{
      this.modemler = result.items.map((m)=>{return {item1:m.id,item2:m.imeiNo}})
    })
}
  }
  onBlokChange(blokId:string){
    this.resetDaire();
    if(blokId !==''){
      this.daireService.daireListeleByBlokId(blokId).subscribe((result:any)=>{
        if(result !== null){
          this.daireler = result.items.map((d)=>d.kapiNo);
        }
      })
    }
    else {
      this.resetDaire();
    }
  }
  
  private resetAllInputs(){
    this.resetBlok();
    this.resetDaire();
    this.resetModem();
  }


  private resetBlok(){

    delete this.bloklar;
    delete this.sayac.blokId;
  }
  private resetDaire(){
    delete this.daireler;
    delete this.sayac.daireNo;
  }
  private resetModem(){
    delete this.modemler;
    delete this.sayac.modemId;
  }

}
