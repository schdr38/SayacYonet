import { Yonetici, Kazan, Kullanici } from './site.model';
import { KeyValuePair } from './kazan.model';

 interface BlokInterface {
    id: string;
    adi: string;
    no: string;
    daireSayisi: string;
    kapaliAlanMetrekare: string;
    yonetici: Yonetici;
 }

export class Blok implements BlokInterface {
  id: string;
  adi: string;
  no: string;
  daireSayisi: string;
  kapaliAlanMetrekare: string;
  kazanId: string;
  yonetici: Yonetici;
  siteId: string;

  constructor() {
    this.yonetici = new Yonetici();
    this.yonetici.kullanici = new Kullanici();
  }
}

export class   BlokListeleModel implements BlokInterface {
  id: string;
  adi: string;
  no: string;
  daireSayisi: string;
  kapaliAlanMetrekare: string;
  kazan: KeyValuePair;
  yonetici: Yonetici;
  site: KeyValuePair;
  constructor() {
  }
}

