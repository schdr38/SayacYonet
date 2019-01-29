import * as moment from 'moment'

interface ISayac{

    kurulumTarihi:Date; 
    tipi:string;
    sayacID1:string;
    sayacID2:string;
    birim:string ;
    baslangicIndex:Number; 
    marka:string;
    modemId:string ;
    boylerKalorimetre:boolean; 
    okumaikinciId:boolean; 
    okunacakMi:boolean;
    faturalandirma:boolean;
     aciklama:string;
     daireNo:Number;
     blokId:string;
}

export class Sayac implements ISayac{
    daireNo: Number;
    blokId: string;
    kurulumTarihi: Date;
    tipi: string;
    sayacID1: string;
    sayacID2: string;
    birim: string;
    baslangicIndex: Number;
    marka: string;
    modemId: string;
    boylerKalorimetre: boolean;
    okumaikinciId: boolean;
    okunacakMi: boolean;
    faturalandirma: boolean;
    aciklama: string;
    tipler =["Other","Oil","Electricity","Gas","Heat Volume Meter","Steam",
    "Hot Water","Water","Heat Cost Allocator","Compressed Air","Cooling Load Meter(Volume measured at return temperature:outlet)",
    "Cooling Load Meter(Volume measured at flow temperature:inlet)","Heat(Volume measured at flow temperature:inlet)",
    "Heat/Cooling Load Meter","Bus/System","Unknown Medium","Reserved","Cold Water","Dual Water","Pressure","A/D Converter"
    ];
    




    birimler = [{tip:"Enerji",birim:"Wh"},
    {tip:"Volume",birim:"m3"},
    {tip:"Time",birim:"Zaman"},
    {tip:"Enerji",birim:"Wh"},
    {tip:"Güç",birim:"W"},
    {tip:"Volume Flow",birim:"m3/h"},
    {tip:"Flow Temp",birim:"C"},
    {tip:"Return Temp",birim:"C"},
    {tip:"Temp Difference",birim:"K"},
    {tip:"Date",birim:"Time Point"}]
    
  
}
export class SayacDuzenle implements ISayac{
    kurulumTarihi: Date;
    tipi: string;
    sayacID1: string;
    sayacID2: string;
    birim: string;
    baslangicIndex: Number;
    marka: string;
    modemId: string;
    boylerKalorimetre: boolean;
    okumaikinciId: boolean;
    okunacakMi: boolean;
    faturalandirma: boolean;
    aciklama: string;
    daireNo: Number;
    blokId: string;
    siteId:string;
}

