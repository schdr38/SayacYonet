import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SayacService } from '../../../../services/sayac.service';
import { Sayac, SayacDuzenle } from '../../../../models/sayac.model';
import { DaireService } from '../../../../services/daire.service';
import * as moment from 'moment';
import { ModemEkleModel } from '../../../../models/modem.model';
import { ModemService } from '../../../../services/modem.service';

@Component({
  selector: 'app-sayac-duzenle',
  templateUrl: './sayac-duzenle.component.html',
  styleUrls: ['./sayac-duzenle.component.css']
})
export class SayacDuzenleComponent implements OnInit {
  id:any;
  sayac = new SayacDuzenle();
  daireler= new Array<{item1:string,item2:string}>();
  modemler = new Array<ModemEkleModel>();
  tipler = new Array<string>();

    constructor(private route:ActivatedRoute,private modemService:ModemService,private sayacService:SayacService,private daireService:DaireService) {
     this.id = route.snapshot.paramMap.get('id');
   
   }

  async ngOnInit() {
    var sayac:any = await this.sayacService.sayacGetir(this.id).toPromise();
    console.log(sayac.blokId);
    var daireler  = await this.daireService.daireListeleByBlokId(this.sayac.blokId).toPromise();
    this.daireler = daireler.map((d)=>{return {item1:d.id,item2:d.adi}});

  }
  onSubmit(formElement:HTMLFormElement){
  }



}
