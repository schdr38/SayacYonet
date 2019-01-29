//// MODULE
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';
import { SlimLoadingBarModule } from 'ng2-slim-loading-bar';
import { MaterialModule } from './material.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ToastrModule } from 'ngx-toastr';
/// MODULE

/// COMPONENTS
import { AppComponent } from './app.component';
import { SolmenuComponent } from './components/yonetici/solmenu/solmenu.component';
import { UstmenuComponent } from './components/yonetici/ustmenu/ustmenu.component';
import { SiteComponent } from './components/yonetici/site/site.component';
import { SiteListeComponent } from './components/yonetici/site/site-liste/site-liste.component';
import { SiteDetayComponent } from './components/yonetici/site/site-detay/site-detay.component';
import { SiteDuzenleComponent } from './components/yonetici/site/site-duzenle/site-duzenle.component';
import { ChecknumberDirective } from './checknumber.directive';
import { ProgressbarComponent } from './progressbar/progressbar.component';
import { KazanListeComponent } from './components/yonetici/kazan/kazan-liste/kazan-liste.component';
import { KazanEkleComponent } from './components/yonetici/kazan/kazan-ekle/kazan-ekle.component';
import { TestComponent } from './components/test/test.component';
import { KazanComponent } from './components/yonetici/kazan/kazan.component';
import { KazanDuzenleComponent } from './components/yonetici/kazan/kazan-duzenle/kazan-duzenle.component';
import { BlokComponent } from './components/yonetici/blok/blok.component';
import { BlokEkleComponent } from './components/yonetici/blok/blok-ekle/blok-ekle.component';
import { BlokListeComponent } from './components/yonetici/blok/blok-liste/blok-liste.component';
import { BlokDuzenleComponent } from './components/yonetici/blok/blok-duzenle/blok-duzenle.component';
import { BlokService } from './services/blok.service';
import { DaireEkleComponent } from './components/yonetici/daire/daire-ekle/daire-ekle.component';
import { DaireDuzenleComponent } from './components/yonetici/daire/daire-duzenle/daire-duzenle.component';
import { DaireListeComponent } from './components/yonetici/daire/daire-liste/daire-liste.component';
import { DaireComponent } from './components/yonetici/daire/daire.component';
/// COMPONENTS

/// SERVICE
import { ProgressBarService } from './services/progress-bar.service';
import { ModalService } from './services/modal.service';
import { LoaderInterceptorService } from './interceptors/loader-interceptor.service';
import { SiteService } from './services/site.service';
import { GlobalErrorHandler } from './global-error.handler';
import { KazanService } from './services/kazan.service';
import { DaireService } from './services/daire.service';
import { ModemComponent } from './components/yonetici/modem/modem.component';
import { ModemEkleComponent } from './components/yonetici/modem/modem-ekle/modem-ekle.component';
import { ModemListeComponent } from './components/yonetici/modem/modem-liste/modem-liste.component';
import { ModemDuzenleComponent } from './components/yonetici/modem/modem-duzenle/modem-duzenle.component';
import { SiteEkleComponent } from './components/yonetici/site/site-ekle/site-ekle.component';
import { NullDefaultValueDirective } from './directives/null-default-value.directive';
import { SayacComponent } from './components/yonetici/sayac/sayac.component';
import { SayacEkleComponent } from './components/yonetici/sayac/sayac-ekle/sayac-ekle.component';
import { SayacListeComponent } from './components/yonetici/sayac/sayac-liste/sayac-liste.component';
import { SayacDuzenleComponent } from './components/yonetici/sayac/sayac-duzenle/sayac-duzenle.component';
import { ModemService } from './services/modem.service';
import { SayacService } from './services/sayac.service';



/// SERVICE


@NgModule({
  declarations: [
    AppComponent,
    SolmenuComponent,
    UstmenuComponent,
    SiteComponent,
    SiteListeComponent,
    SiteEkleComponent,
    SiteDetayComponent,
    SiteDuzenleComponent,
    ChecknumberDirective,
    NullDefaultValueDirective,
    ProgressbarComponent,
    KazanListeComponent,
    TestComponent,
    KazanEkleComponent,
    KazanComponent,
    KazanDuzenleComponent,
    BlokComponent,
    BlokEkleComponent,
    BlokListeComponent,
    BlokDuzenleComponent,
    DaireComponent,
    DaireEkleComponent,
    DaireDuzenleComponent,
    DaireListeComponent,
    ModemComponent,
    ModemEkleComponent,
    ModemListeComponent,
    ModemDuzenleComponent,
    SayacComponent,
    SayacEkleComponent,
    SayacListeComponent,
    SayacDuzenleComponent,
    ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule,
    SlimLoadingBarModule.forRoot(),
    ToastrModule.forRoot() // ToastrModule added

  ],
  providers: [SiteService, ModalService, KazanService, BlokService, DaireService,SayacService,ModemService, {
    provide: HTTP_INTERCEPTORS,
    useClass: LoaderInterceptorService,
    multi: true,
  },
  {provide: ErrorHandler, useClass: GlobalErrorHandler}
],
  bootstrap: [AppComponent]
})
export class AppModule { }
