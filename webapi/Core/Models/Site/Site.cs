using System.Collections.Generic;
using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;

namespace webapi.Core.Models.Site
{
    public class Site:BaseEntity
    
    {   public string adi { get; set; }
        [BsonIgnoreIfNull]
        public Adres adres { get; set; }
        [BsonIgnoreIfNull]
        public Yonetici yonetici { get; set; }
        public bool aktifMi { get; set; }
        public string tel { get; set; }
        public double manipulasyonKatsayisi { get; set; }
        [BsonIgnoreIfNull]

        public List<string> kazanlar { get; set; }
        [BsonIgnoreIfNull]
        public List<string> bloklar { get; set; }
        [BsonIgnoreIfNull]
        public List<string> modemler { get; set; }
        
    }
}