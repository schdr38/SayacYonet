import { Component, OnInit } from '@angular/core';
  import { BlokListeleModel } from '../../../../models/blok.model';
import { BlokService } from '../../../../services/blok.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ReplaySubject } from 'rxjs/ReplaySubject';
import { Yonetici, Kullanici, Kazan } from '../../../../models/site.model';
import { KeyValuePair } from '../../../../models/kazan.model';
import { ToastrService } from 'ngx-toastr';
import { KazanService } from '../../../../services/kazan.service';

@Component({
  selector: 'app-blok-duzenle',
  templateUrl: './blok-duzenle.component.html',
  styleUrls: ['./blok-duzenle.component.css']
})
export class BlokDuzenleComponent implements OnInit {
  blokId: String;
  blok: BlokListeleModel;
  kazanlar:Array<Kazan> ;
  private destroyed: ReplaySubject<boolean> = new ReplaySubject(1);

  constructor(private blokService: BlokService, 
    private route: ActivatedRoute, private router: Router, 
    private toastr: ToastrService,private kazanService:KazanService) {
    this.initiliazeBlokObject();
    this.blokId = this.route.snapshot.paramMap.get('id');
      this.blokService.blokDuzenleModelGetir(this.blokId).do((blok)=>{
        this.blok  = blok as BlokListeleModel;
        if(this.blok.yonetici === null) {
          this.blok.yonetici = new Yonetici()
          this.blok.yonetici.kullanici = new Kullanici();
        }

      }).switchMap((params)=>this.kazanService.kazanlarGetirSiteIdIle(this.blok.site.id))
      .subscribe((kazanlar)=>{
        this.kazanlar = kazanlar.items;
      });
  }
  onSubmit(form: HTMLFormElement) {
    this.blokService.blokDuzenle(this.blok).subscribe((result: any) => {
    if(result.value === 'Başarılı')  {
      this.toastr.success('Başarıyla güncellenmiştir');
      this.router.navigate(['yonetici', 'blok', 'liste']);
    } else {
      this.toastr.error('Hiç bir bilgi güncellenmedi ya da güncellerken sorun oluştu', 'Güncellerken hata oluştu');
      this.router.navigate(['yonetici', 'blok', 'liste']);
  }

  });
}
  ngOnInit() {

  }

  private initiliazeBlokObject() {
    this.blok = new BlokListeleModel();
    this.blok.site = new KeyValuePair();
    this.blok.kazan = new KeyValuePair();
    this.blok.yonetici = new Yonetici();
    this.blok.yonetici.kullanici = new Kullanici();
  }

}
