using MongoDB.Bson.Serialization.Attributes;

namespace webapi.Core.Models.Modem
{
    public class Modem:BaseEntity
    {   [BsonRequired]
        public string imeiNo { get; set; }
        [BsonIgnoreIfNull]
        public string tel { get; set; }
        [BsonRequired]
        public bool durum { get; set; }
        [BsonRequired]
        public string kazanId { get; set; }
    }
}