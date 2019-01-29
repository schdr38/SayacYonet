using System.Collections.Generic;
using MongoDB.Bson.Serialization.Attributes;

namespace webapi.Core.Models.Daire
{
    public class Daire:BaseEntity
    {
        [BsonRequired]
        public int kapiNo { get; set; }
        [BsonRequired]
        public string adSoyad { get; set; }
        public bool kiraciMi { get; set; }
        public int kapaliAlan { get; set; }
        [BsonRequired]
        public Kullanici kullanici { get; set; }
        [BsonIgnoreIfNull]
        public string not { get; set; }
        
        
    }
}