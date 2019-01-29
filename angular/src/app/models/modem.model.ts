import { KeyValuePair } from "./kazan.model";

interface IModem {
          imeiNo:string
          tel:string
          durum:boolean
          kazanId:string
   }
  
  export class ModemEkleModel implements IModem {
      imeiNo: string;
      tel: string;
      durum: boolean;
      kazanId: string;
      siteId: string;
}
export class ModemListeleModel{
    kazan:KeyValuePair;
    site:KeyValuePair
    imeiNo: string;
    tel: string;
    durum: boolean;
    id: string;
    constructor() {
        this.kazan =new KeyValuePair();
        this.site = new KeyValuePair();
        
    }
}  