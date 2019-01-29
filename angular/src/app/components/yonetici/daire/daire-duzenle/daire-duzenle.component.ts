import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DaireService } from '../../../../services/daire.service';
import { Daire } from '../../../../models/daire.model';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-daire-duzenle',
  templateUrl: './daire-duzenle.component.html',
  styleUrls: ['./daire-duzenle.component.css']
})
export class DaireDuzenleComponent implements OnInit {
  daire: Daire = new Daire();
  constructor(private route: ActivatedRoute, private daireService: DaireService,
     private router: Router, private toastr: ToastrService) {
    const  id = this.route.snapshot.paramMap.get('id');
    this.daireService.daireGetir(id).subscribe((daire: any) => {
      this.daire = daire;
    });
   }

  ngOnInit() {
  }
  onSubmit(form: HTMLFormElement) {
    this.daireService.daireDuzenle(this.daire).subscribe((result: any) => {
      if (result.value === 'Başarılı') {
        this.toastr.success('Başarıyla güncellenmiştir');
        this.router.navigate(['yonetici', 'daire', 'liste']);
      } else {
      this.toastr.error('Hiç bir bilgi güncellenmedi ya da güncellerken sorun oluştu', 'Güncellerken hata oluştu');
      this.router.navigate(['yonetici', 'daire', 'liste']);
    }
  });
}
}


