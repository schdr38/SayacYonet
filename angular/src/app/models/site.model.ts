import { Blok } from './blok.model';

export class Site {
  id: string;
  adi: string;
  adres: Adres;
  yonetici: Yonetici;
  aktifMi: boolean;
  tel: string;
  kazan: Kazan;
  manipulasyonKatsayisi: Number;
  kazanlar: Array<Kazan>;
  constructor() {
    this.adres = new Adres();
    this.yonetici = new Yonetici();
    this.yonetici.kullanici = new Kullanici();
  }
}

 export class Adres {
  adres: string;
  sehir: string;
  ilce: string;
}

 export class Yonetici {
 adi: string;
 tel: string;
 kullanici: Kullanici;
}

 export class Kullanici {
   adi: string;
   sifre: string;
}

  export class Kazan {
   id: string;
   adi: string;
   IsıIstasyonuVarMi: boolean;
   OrtakSıcakSuKaloriMetreVarMi: boolean;
   daireKalorimetre: boolean;
   daireSicakSuSayack: boolean;
   daireSogukSuSayac: boolean;
   dairePayOlcer: boolean;
}

