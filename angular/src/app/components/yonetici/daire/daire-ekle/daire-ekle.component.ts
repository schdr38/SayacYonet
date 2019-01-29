import { Component, OnInit } from '@angular/core';
import { DaireService } from '../../../../services/daire.service';
import { BlokService } from '../../../../services/blok.service';
import { Site } from '../../../../models/site.model';
import { TableQuery } from '../../../../models/table.query.model';
import { SiteService } from '../../../../services/site.service';
import { Daire } from '../../../../models/daire.model';
import { Blok } from '../../../../models/blok.model';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-daire-ekle',
  templateUrl: './daire-ekle.component.html',
  styleUrls: ['./daire-ekle.component.css']
})
export class DaireEkleComponent implements OnInit {
  daire: Daire = new Daire();
  siteler =  new Array<{item1: string, item2: String}>();
  bloklar = Array<Blok  >();
  selectedSId: String;
  constructor(private daireService: DaireService,
    private siteService: SiteService,
     private blokService: BlokService,
    private toastr: ToastrService,
    private router: Router) {
    const siteQueryObject = new TableQuery(1, 1000, '', true, '' );
    siteService.siteIsimveIdleriGetir().subscribe((result: any) => {
      this.siteler = result;

    });
   }

  ngOnInit() {
  }
  onSiteChange(siteId: string) {
    console.log('siteId',siteId);
    if (siteId.length === 0) {
      console.log('girdi');
        this.resetBlokInput();
    } else { this.blokService.blokListeleBySiteId(siteId).subscribe((result) => {
      this.bloklar = result.items;
    });
    }
  }
  onSubmit(daireEkleForm: HTMLFormElement) {
    if (this.daire.not === '') { delete this.daire.not; }
    this.daireService.daireEkle(this.daire).subscribe((result: any) => {
      console.log('result', result);
      if (result.value === 'Başarılı') {
        this.toastr.success('Başarıyla düzenlenmiştir');
        this.router.navigate(['yonetici', 'daire', 'liste']);
        } else {
        this.toastr.error('Kaydedilemedi', 'Başarısız İşlem');
        this.router.navigate(['yonetici', 'daire', 'liste']);

      }
    });

  }

  resetBlokInput() {
    delete this.daire.blokId;
    this.bloklar = [];

  }

}
