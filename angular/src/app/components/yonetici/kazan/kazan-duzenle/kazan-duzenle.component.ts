import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { KazanListeModel, KazanDuzenleModel } from '../../../../models/kazan.model';
import { KazanService } from '../../../../services/kazan.service';
import { SiteService } from '../../../../services/site.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-kazan-duzenle',
  templateUrl: './kazan-duzenle.component.html',
  styleUrls: ['./kazan-duzenle.component.css']
})
export class KazanDuzenleComponent implements OnInit {
  kazan = new KazanDuzenleModel();
  id: String;
  siteler = new Array<{item1: string, item2: string}>();
  constructor(private router: Router, private route: ActivatedRoute,
    private kazanService: KazanService,
    private toastr: ToastrService) {
      this.id = this.route.snapshot.paramMap.get('id');
      this.kazanService.kazanGetir(this.id).subscribe((kazan) => {
        this.kazan = kazan as KazanDuzenleModel;
        console.log(this.kazan);
        });

   }
   onSubmit(form: HTMLElement) {
    console.log(this.kazan);
     this.kazanService.kazanDuzenle(this.kazan).subscribe((result: any) => {
    if (result.value === 'Başarılı') {
      this.toastr.success('Başarıyla güncellenmiştir');
      this.router.navigate(['yonetici', 'kazan', 'liste']);
    } else {
    this.toastr.error('Hiç bir bilgi güncellenmedi ya da güncellerken sorun oluştu','Güncellerken hata oluştu');
    this.router.navigate(['yonetici', 'kazan', 'liste']);
 }
    });
   }

  ngOnInit() {
  }

}
