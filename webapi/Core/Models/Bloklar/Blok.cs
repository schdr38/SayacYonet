using System.Collections.Generic;
using MongoDB.Bson.Serialization.Attributes;
using webapi.Core.Models.Daire;
namespace webapi.Core.Models.Bloklar
{
    public class Blok:BaseEntity
    {   [BsonRequired]
        public string adi { get; set; }
        [BsonRequired]
        public int no { get; set; }
        [BsonRequired]
        public int daireSayisi { get; set; }
        [BsonRequired]
        public int kapaliAlanMetrekare { get; set; }
        [BsonRequired]
        public string kazanId { get; set; }
        [BsonIgnoreIfNull]
        public Yonetici yonetici { get; set; }
        [BsonIgnoreIfNull]
        public List<Daire.Daire> daireler { get; set; }
        [BsonIgnoreIfNull]
        public List<Sayac.Sayac> sayaclar { get; set; }
    }
}