using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;

namespace webapi.Core.Models
{
    public class BaseEntity
    {  
        public BaseEntity() {
    }
        [BsonId]
        [BsonRepresentation(BsonType.ObjectId)]
        public string Id { get; set; }
       

    }
     
}