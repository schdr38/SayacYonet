import { Kullanici } from './site.model';
import { KeyValuePair } from './kazan.model';

interface IDaire {
  kapiNo: Number;
  adSoyad: String;
  kiraciMi: boolean;
  kullanici: Kullanici;
  not: String;
  blokId: String;
 }

export class Daire implements IDaire {
  blokId: String;
  kapiNo: Number;
  adSoyad: String;
  kiraciMi: boolean;
  kapaliAlan: Number;
  kullanici: Kullanici;
  not: String;
  constructor() {
    this.kullanici = new Kullanici();
  }
}
