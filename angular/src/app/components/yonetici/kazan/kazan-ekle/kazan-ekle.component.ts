import { Component, OnInit } from '@angular/core';
import {  KazanEkleModel } from '../../../../models/kazan.model';
import { SiteService } from '../../../../services/site.service';
import { KazanService } from '../../../../services/kazan.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-kazan-ekle',
  templateUrl: './kazan-ekle.component.html',
  styleUrls: ['./kazan-ekle.component.css']
})
export class KazanEkleComponent implements OnInit {

  kazan = new KazanEkleModel();
  siteler = new Array<{item1: String, item2: String}>();
  constructor(private siteService: SiteService ,
     private kazanService: KazanService,
     private router: Router,
     private toastr: ToastrService) {
    this.siteService.siteIsimveIdleriGetir().subscribe((siteler) => {
      console.log(siteler);
      this.siteler =  siteler as Array<{item1: String, item2: String}>;

    });
  }

  ngOnInit() {
  }

  onSubmit(form: HTMLFormElement) {
  this.kazanService.kazanEkle(this.kazan).subscribe((result: any) => {
    if (result.value === 'Başarılı') {
      this.toastr.success('Başarıyla eklenmiştir');
      this.router.navigate(['yonetici', 'kazan', 'liste']);
    } else { this.router.navigate(['yonetici', 'kazan', 'liste']); }

  });
  }
}
