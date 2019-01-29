import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ModemListeleModel } from '../../../../models/modem.model';
import { ModemService } from '../../../../services/modem.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-modem-duzenle',
  templateUrl: './modem-duzenle.component.html',
  styleUrls: ['./modem-duzenle.component.css']
})
export class ModemDuzenleComponent implements OnInit {
  @ViewChild('btnSubmit') btnSubmit:ElementRef;
  id:string;
  isErrOccrd = false;
  modem:ModemListeleModel = new ModemListeleModel();
  
  constructor(private route: ActivatedRoute,  private modemService: ModemService, private router: Router,
    private toastr: ToastrService){
        this.id = this.route.snapshot.paramMap.get('id');
        modemService.modemGetir(this.id).subscribe((result)=>{
          this.modem = result;
        })    

    }
  ngOnInit() {
  }
  onSubmit(form:HTMLFormElement){
    this.modemService.modemDuzenle(this.modem).subscribe((result:any)=>{
      this.btnSubmit.nativeElement.disabled = true;

      if(result.value==='Başarılı'){
        this.toastr.success('Modem başarıyla güncellenmiştir');
        this.router.navigate(['yonetici', 'modem', 'liste']);
      }
      else {
        this.btnSubmit.nativeElement.disabled = false;
        throw TypeError("Modem Güncellenemedi ya bilgiler değiştirilmedi ya da hata oluştu")
      }
    })

  }
  

}
