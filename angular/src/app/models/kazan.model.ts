// tslint:disable-next-line:no-empty-interface
export interface KazanInterface {
  id: string;
  adi: string;
  isiIstasyonuVarMi: boolean;
  ortakSicakSuKaloriMetreVarMi: boolean;
  daireKalorimetre: boolean;
  daireSicakSuSayac: boolean;
  daireSogukSuSayac: boolean;
  dairePayOlcer: boolean;
  siteId: string;
}

export class KazanDuzenleModel implements KazanInterface {
  id: string;
  adi: string;
  isiIstasyonuVarMi: boolean;
  ortakSicakSuKaloriMetreVarMi: boolean;
  daireKalorimetre: boolean;
  daireSicakSuSayac: boolean;
  daireSogukSuSayac: boolean;
  dairePayOlcer: boolean;
  siteId: string;
}

export class KazanListeModel {
  id: string;
  adi: string;
  isiIstasyonuVarMi: boolean;
  ortakSicakSuKaloriMetreVarMi: boolean;
  daireKalorimetre: boolean;
  daireSicakSuSayac: boolean;
  daireSogukSuSayac: boolean;
  dairePayOlcer: boolean;
}
export class KeyValuePair {
  id:  string;
  adi: string;
}

export class KazanEkleModel implements KazanInterface {

  id: string;
  adi: string;
  isiIstasyonuVarMi: boolean;
  ortakSicakSuKaloriMetreVarMi: boolean;
  daireKalorimetre: boolean;
  daireSicakSuSayac: boolean;
  daireSogukSuSayac: boolean;
  dairePayOlcer: boolean;
  siteId: string;
  constructor() {
    this.isiIstasyonuVarMi = false;
    this.ortakSicakSuKaloriMetreVarMi = false ;
    this.daireKalorimetre = false ;
    this.ortakSicakSuKaloriMetreVarMi = false ;
    this.daireKalorimetre = false ;
    this.daireSicakSuSayac = false ;
    this.daireSogukSuSayac = false ;
    this.dairePayOlcer = false ;
  }
}

