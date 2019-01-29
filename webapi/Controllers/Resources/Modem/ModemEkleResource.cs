using System.ComponentModel.DataAnnotations;
using webapi.Core.Extensions;

public class ModemEkleResource
{       
       
        [Required,MaxLength(50)]
        public string imeiNo { get; set; }
        [Required,MaxLength(13),DataType(DataType.PhoneNumber),RegularExpression("([0-9][0-9]*)",ErrorMessage="Yanlış format lütfen sayı giriniz")]
        public string tel { get; set; }
        [Required]
        public bool durum { get; set; }
        [Required,ValidId]
        public string kazanId { get; set; }
        [Required,ValidId]
        public string siteId { get; set; }
}