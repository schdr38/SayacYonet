import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SiteComponent } from '../components/yonetici/site/site.component';
import { SiteEkleComponent } from '../components/yonetici/site/site-ekle/site-ekle.component';
import { SiteListeComponent } from '../components/yonetici/site/site-liste/site-liste.component';
import { SiteDetayComponent } from '../components/yonetici/site/site-detay/site-detay.component';
import { SiteDuzenleComponent } from '../components/yonetici/site/site-duzenle/site-duzenle.component';
import { KazanListeComponent } from '../components/yonetici/kazan/kazan-liste/kazan-liste.component';
import { KazanEkleComponent } from '../components/yonetici/kazan/kazan-ekle/kazan-ekle.component';
import { KazanComponent } from '../components/yonetici/kazan/kazan.component';
import { KazanDuzenleComponent } from '../components/yonetici/kazan/kazan-duzenle/kazan-duzenle.component';
import { BlokEkleComponent } from '../components/yonetici/blok/blok-ekle/blok-ekle.component';
import { BlokListeComponent } from '../components/yonetici/blok/blok-liste/blok-liste.component';
import { BlokDuzenleComponent } from '../components/yonetici/blok/blok-duzenle/blok-duzenle.component';
import { DaireComponent } from '../components/yonetici/daire/daire.component';
import { DaireEkleComponent } from '../components/yonetici/daire/daire-ekle/daire-ekle.component';
import { DaireListeComponent } from '../components/yonetici/daire/daire-liste/daire-liste.component';
import { DaireDuzenleComponent } from '../components/yonetici/daire/daire-duzenle/daire-duzenle.component';
import { ModemComponent } from '../components/yonetici/modem/modem.component';
import { ModemEkleComponent } from '../components/yonetici/modem/modem-ekle/modem-ekle.component';
import { ModemListeComponent } from '../components/yonetici/modem/modem-liste/modem-liste.component';
import { ModemDuzenleComponent } from '../components/yonetici/modem/modem-duzenle/modem-duzenle.component';
import { SayacEkleComponent } from '../components/yonetici/sayac/sayac-ekle/sayac-ekle.component';
import { SayacListeComponent } from '../components/yonetici/sayac/sayac-liste/sayac-liste.component';
import { SayacDuzenleComponent } from '../components/yonetici/sayac/sayac-duzenle/sayac-duzenle.component';

// tslint:disable-next-line:eofline
@NgModule({
  imports : [
    RouterModule.forRoot([
      {path: 'yonetici/site', component: SiteComponent,
      children : [
        {path: 'ekle', component: SiteEkleComponent, pathMatch: 'full'},
        {path: 'liste', component: SiteListeComponent, pathMatch: 'full'},
        {path: 'detaylar/:id', component: SiteDetayComponent, pathMatch: 'full'},
        {path: 'duzenle/:id', component: SiteDuzenleComponent, pathMatch: 'full'}
      ]},
      {path: 'yonetici/kazan', component: KazanComponent,
      children: [
        {path: 'ekle', component: KazanEkleComponent, pathMatch: 'full'},
        {path: 'liste', component: KazanListeComponent, pathMatch: 'full'},
        {path: 'duzenle/:id', component: KazanDuzenleComponent, pathMatch: 'full'}
      ]},
      {path: 'yonetici/blok', component: KazanComponent,
      children: [
        {path: 'ekle', component: BlokEkleComponent, pathMatch: 'full'},
        {path: 'liste', component: BlokListeComponent, pathMatch: 'full'},
        {path: 'duzenle/:id', component: BlokDuzenleComponent, pathMatch: 'full'}
      ]},
      {path: 'yonetici/daire', component: DaireComponent,
      children: [
        {path: 'ekle', component: DaireEkleComponent, pathMatch: 'full'},
        {path: 'liste', component: DaireListeComponent, pathMatch: 'full'},
        {path: 'duzenle/:id', component: DaireDuzenleComponent, pathMatch: 'full'}
      ]}, {path: 'yonetici/modem', component: ModemComponent,
      children: [
        {path: 'ekle', component: ModemEkleComponent, pathMatch: 'full'},
        {path: 'liste', component: ModemListeComponent, pathMatch: 'full'},
        {path: 'duzenle/:id', component: ModemDuzenleComponent, pathMatch: 'full'}
      ]},
      {path: 'yonetici/sayac', component: ModemComponent,
      children: [
        {path: 'ekle', component: SayacEkleComponent, pathMatch: 'full'},
        {path: 'liste', component: SayacListeComponent, pathMatch: 'full'},
        {path: 'duzenle/:id', component: SayacDuzenleComponent, pathMatch: 'full'}
      ]},
      
    ])
  ],
  declarations: [],
  exports: [RouterModule]
})



export class AppRoutingModule { }
