import { Component, OnInit, OnDestroy, ViewContainerRef } from '@angular/core';
import { Site } from '../../../../models/site.model';
import { SiteService } from '../../../../services/site.service';
import { Router } from '@angular/router';
import * as $ from 'jquery';
import { ToastrService } from 'ngx-toastr';
import { ReplaySubject } from 'rxjs/ReplaySubject';
@Component({
  selector: 'app-site-ekle',
  templateUrl: './site-ekle.component.html',
  styleUrls: ['./site-ekle.component.css']
})
export class SiteEkleComponent implements OnInit, OnDestroy {

  private destroyed: ReplaySubject<boolean> = new ReplaySubject(1);


  subscribtion: any;
  site: Site = new Site();
  constructor(
    private siteService: SiteService,
     private router: Router,
     private toastr: ToastrService) {

   }
  ngOnInit() {

  }

  ngOnDestroy(): void {
    this.destroyed.next(true);
    this.destroyed.complete();
  }
  onSubmit(form: HTMLFormElement) {

    console.log(this.site);
    this.subscribtion = this.siteService.siteEkle(this.site).takeUntil(this.destroyed).subscribe((sonuc) => {
      console.log('başarılı', sonuc);
      this.toastr.success('Başarıyla düzenlenmiştir');
      this.router.navigate(['yonetici', 'site', 'liste']);
   });
  }
  onModalCreated() {

  }

}
