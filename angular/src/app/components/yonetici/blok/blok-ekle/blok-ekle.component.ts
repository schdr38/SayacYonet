import { Component, OnInit } from '@angular/core';
import { Blok } from '../../../../models/blok.model';
import { SiteService } from '../../../../services/site.service';
import { KazanService } from '../../../../services/kazan.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { BlokService } from '../../../../services/blok.service';
import { Kazan } from '../../../../models/site.model';

@Component({
  selector: 'app-blok-ekle',
  templateUrl: './blok-ekle.component.html',
  styleUrls: ['./blok-ekle.component.css']
})
export class BlokEkleComponent implements OnInit {
  blok: Blok = new Blok();
  siteler = new Array<{item1: String, item2: String}>();
  kazanlar: any;

  constructor(private siteService: SiteService ,
     private kazanService: KazanService,
     private router: Router,
     private blokService: BlokService,
     private toastr: ToastrService) {
    this.siteService.siteIsimveIdleriGetir().subscribe((siteler) => {
      console.log(siteler);
      this.siteler =  siteler as Array<{item1: String, item2: String}>;
    });
  }

  ngOnInit() {
  }
  onSiteChange(value) {
    const id = value ;
    delete this.blok.kazanId;
    this.kazanService.kazanlarGetirSiteIdIle(id).subscribe((kazanlar) => {
    console.log(kazanlar);
    this.kazanlar = kazanlar.items;
  });

   }

  onSubmit(form: HTMLFormElement) {
  this.blokService.blokEkle(this.blok).subscribe((result: any) => {
    if (result.value === 'Başarılı') {
      this.toastr.success('Başarıyla eklenmiştir');
      this.router.navigate(['yonetici', 'blok', 'liste']);
    } else { this.router.navigate(['yonetici', 'blok', 'liste']); }

  });
  }
numbersOnly() {
    let value = '';
    value = value.replace(/[^0-9.-]/g, '');
}
}
