import { Component, OnInit } from '@angular/core';
import { SiteService } from '../../../../services/site.service';
import { ModemEkleModel } from '../../../../models/modem.model';
import { KazanService } from '../../../../services/kazan.service';
import { Kazan } from '../../../../models/site.model';
import { ToastrService } from 'ngx-toastr';
import { ModemService } from '../../../../services/modem.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-modem-ekle',
  templateUrl: './modem-ekle.component.html',
  styleUrls: ['./modem-ekle.component.css']
})
export class ModemEkleComponent implements OnInit {
  siteler =  new Array<{item1: string, item2: string}>();
  modem:ModemEkleModel  = new ModemEkleModel();
  kazanlar = new Array<{item1: string, item2: string}>();
  selectedSId:string
  constructor(private siteService:SiteService,private kazanService: KazanService,
    private toastr:ToastrService,private modemService:ModemService,private router:Router) {
    siteService.siteIsimveIdleriGetir().subscribe((result:any)=>{
      if(result !== null){
        this.siteler = result;
      }
    })
   }

  ngOnInit() {
  }

  onSiteChange(siteId:string){
    if(siteId == '') this.resetInputs()
    else  this.kazanService.kazanlarGetirSiteIdIle(siteId).subscribe((result:any)=>{
      if(result == null){}
      else {
        var items = result.items as Array<Kazan> ;
        this.kazanlar = items.map((k)=>{
          return {item1: k.id,item2: k.adi};
        });
                console.log(items);

      }
    });

  }
  onSubmit(form: HTMLFormElement) {
    this.modemService.modemEkle(this.modem).subscribe((result: any) => {
      if (result.value === 'Başarılı') {
        this.toastr.success('Başarıyla eklenmiştir');
        this.router.navigate(['yonetici', 'modem', 'liste']);
      } else { 
        throw new TypeError("Modem oluşturulamadı");
       }
  
    });
    }
    resetInputs(){

      delete this.kazanlar
      delete this.modem.kazanId
      delete this.modem.siteId
    }

}
