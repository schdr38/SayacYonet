import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SiteService } from '../../../../services/site.service';
import { Site } from '../../../../models/site.model';

@Component({
  selector: 'app-site-detay',
  templateUrl: './site-detay.component.html',
  styleUrls: ['./site-detay.component.css']
})
export class SiteDetayComponent implements OnInit {
  public site = new Site();

  constructor(private route: ActivatedRoute, private siteService: SiteService,
     private router: Router) {
    const id = this.route.snapshot.paramMap.get('id');
    this.siteService.siteGetir(id).subscribe((sonuc) => {
      this.site = sonuc;
    console.log(sonuc.yonetici.tel);
    });
    }

  ngOnInit() {

  }

}
