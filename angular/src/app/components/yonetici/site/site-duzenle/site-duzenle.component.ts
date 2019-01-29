import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Site } from '../../../../models/site.model';
import { SiteService } from '../../../../services/site.service';
import { ToastrService } from 'ngx-toastr';
import { ReplaySubject } from 'rxjs/ReplaySubject';

@Component({
  selector: 'app-site-duzenle',
  templateUrl: './site-duzenle.component.html',
  styleUrls: ['./site-duzenle.component.css']
})
export class SiteDuzenleComponent implements OnInit, OnDestroy {

  id: string;
  private site: Site = new Site();
  private destroyed: ReplaySubject<boolean> = new ReplaySubject(1);
  constructor(private route: ActivatedRoute,  private siteService: SiteService, private router: Router,
    private toastr: ToastrService) {
    this.id = this.route.snapshot.paramMap.get('id');
    const subscribtion = this.siteService.siteGetir(this.id)
    .takeUntil(this.destroyed)
    .subscribe((sonuc) => {
      this.site = sonuc;
      console.log(this.site);
    });


  }
  onSubmit(form: HTMLElement) {
    const element = <HTMLButtonElement> document.getElementById('btnKabul');
    console.log(this.site);
    this.siteService
    .siteDuzenle(this.site.id, this.site)
    .takeUntil(this.destroyed)
    .subscribe((sonuc) => {
      this.toastr.success('Başarıyla düzenlenmiştir');
      this.router.navigate(['yonetici', 'site', 'liste']);  });
  }

  ngOnInit() {
  }
  ngOnDestroy(): void {
    this.destroyed.next(true);
    this.destroyed.complete();
  }

}
