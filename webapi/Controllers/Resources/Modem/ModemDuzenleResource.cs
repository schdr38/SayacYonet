using System.ComponentModel.DataAnnotations;

namespace webapi.Controllers.Resources.Modem
{
    public class ModemDuzenleResource
    {
        public string Id { get; set; }
        [Required,MaxLength(50)]
        public string imeiNo { get; set; }
        [Required,MaxLength(13),DataType(DataType.PhoneNumber),RegularExpression("([0-9][0-9]*)",ErrorMessage="Yanlış format lütfen sayı giriniz")]
        public string tel { get; set; }
        [Required]
        public bool durum { get; set; }
    }
}