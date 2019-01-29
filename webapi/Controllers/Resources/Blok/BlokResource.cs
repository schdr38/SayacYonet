using System.ComponentModel.DataAnnotations;
using webapi.Core.Extensions;
using webapi.Core.Models;

namespace webapi.Controllers.Resources.BlokFolder
{
    public class BlokResource
    {   
        public string Id { get; set; }
        [Required,MaxLength(250)]
        public string adi { get; set; }
        [RegularExpression("([1-9][0-9]*)",ErrorMessage="Yanlış format lütfen sayı giriniz"),Required] // for 1-inf

        public string daireSayisi { get; set; }
        [RegularExpression("([1-9][0-9]*)",ErrorMessage="Yanlış format lütfen sayı giriniz"),Required] // for 1-inf

        public string no { get; set; }
        [RegularExpression("([1-9][0-9]*)",ErrorMessage="Yanlış format lütfen sayı giriniz"),Required] // for 1-inf
        public string kapaliAlanMetrekare { get; set; }
        [Required,ValidId]
        public string kazanId { get; set; }
        public Yonetici yonetici { get; set; }
        [Required,ValidId]
        public string siteId { get; set; }
    }
}