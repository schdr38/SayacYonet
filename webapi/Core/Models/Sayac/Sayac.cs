using System;

namespace webapi.Core.Models.Sayac
{
    public class Sayac:BaseEntity
    {
        public DateTime kurulumTarihi { get; set; }
        public string tipi { get; set; }
        public string sayacID1 { get; set; }
        public string sayacID2 { get; set; }
        public string daireNo { get; set; }
        public string Birim { get; set; }
        public double baslangicIndex { get; set; }
        public string marka { get; set; }
        public string modemId { get; set; }
        public bool boylerKalorimetre { get; set; }
        public bool okumaikinciId { get; set; }
        public bool okunacakMi { get; set; }
        public bool faturalandirma { get; set; }
        public string aciklama { get; set; }
        

        
        
        
    }
}