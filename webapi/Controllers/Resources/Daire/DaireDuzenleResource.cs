using System.ComponentModel.DataAnnotations;
using webapi.Core.Models;

namespace webapi.Controllers.Resources.Daire
{
    public class DaireUpdateResource
    {
        [MaxLength(24),MinLength(24),Required]
        public string Id { get; set; }
        [Required]
        public int kapiNo { get; set; }
        [Required,MaxLength(255)]
        public string adSoyad { get; set; }
        [Required]
        public int kapaliAlan { get; set; }
        [Required]
        public bool kiraciMi { get; set; }
        [Required]
        public Kullanici kullanici { get; set; }
        [MaxLength(255)]
        public string not { get; set; }
    }
}