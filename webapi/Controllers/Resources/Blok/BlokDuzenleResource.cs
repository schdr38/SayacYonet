using System.ComponentModel.DataAnnotations;
using webapi.Core.Extensions;
using webapi.Core.Models;

namespace webapi.Controllers.Resources.Blok
{
    public class BlokDuzenleResource
    {   [Required,ValidId]
        public string Id { get; set; }
        [Required,MaxLength(250)]
        public string adi { get; set; }
        [Required,MaxLength(4),RegularExpression("([1-9][0-9]*)",ErrorMessage="Yanlış format lütfen sayı giriniz")]
        public string  no { get; set; }
        [Required,MaxLength(4),RegularExpression("([1-9][0-9]*)",ErrorMessage="Yanlış format lütfen sayı giriniz")]
        public string daireSayisi { get; set; }
        [Required,MaxLength(10),RegularExpression("([1-9][0-9]*)",ErrorMessage="Yanlış format lütfen sayı giriniz")]
        public string kapaliAlanMetrekare { get; set; }
        public KeyValue kazan { get; set; }
        public Yonetici yonetici { get; set; }
    }
}