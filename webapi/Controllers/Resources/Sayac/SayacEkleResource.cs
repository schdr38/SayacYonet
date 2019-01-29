using System;
using System.ComponentModel.DataAnnotations;
using webapi.Core.Extensions;

namespace webapi.Controllers.Resources.Sayac
{
    public class SayacEkleResource
    {   [Required]
        public DateTime kurulumTarihi { get; set; }
        [Required]
        public string tipi { get; set; }
        [MaxLength(8)]
        public string sayacID1 { get; set; }
        [MaxLength(8)]

        public string sayacID2 { get; set; }
        [MaxLength(50)]
        public string Birim { get; set; }
        [MaxLength(4)]
        public string daireNo { get; set; }
        [Required]
        public double baslangicIndex { get; set; }
        public string marka { get; set; }
        [Required,ValidId]
        public string modemId { get; set; }
        public bool boylerKalorimetre { get; set; }
        public bool okumaikinciId { get; set; }
        public bool okunacakMi { get; set; }
        public bool faturalandirma { get; set; }
        
        public string aciklama { get; set; }
        [Required,ValidId]
        public string blokId { get; set; }
    }
}