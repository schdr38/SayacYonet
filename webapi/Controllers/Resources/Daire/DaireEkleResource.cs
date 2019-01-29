using System;
using System.ComponentModel.DataAnnotations;
using MongoDB.Bson.Serialization.Attributes;
using webapi.Core.Extensions;
using webapi.Core.Models;

namespace webapi.Controllers.Resources.Daire
{
    public class DaireEkleResource
    
    {   [MaxLength(24),MinLength(24)]
        public string Id { get; set; }
        [Required,MaxLength(10),RegularExpression("([1-9][0-9]*)",ErrorMessage="Yanlış format lütfen sayı giriniz")]
        public string kapiNo { get; set; }
        [Required,MaxLength(255)]
        public string adSoyad { get; set; }
        public bool kiraciMi { get; set; }
        public Kullanici kullanici { get; set; }
        [MaxLength(255)]
        public string not { get; set; }
        [Required,MinLength(24),MaxLength(24),ValidId]
        public string blokId { get; set; }
        
    }
}