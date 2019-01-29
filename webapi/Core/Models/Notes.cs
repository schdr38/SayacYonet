using System;
using MongoDB.Bson.Serialization.Attributes;

namespace webapi.Core.Models
{
    public class Notes
    {
        [BsonId]
        public string Id { get; set; }
        public string Body { get; set; }
        public DateTime UpdatedOn { get; set; } 
        public DateTime CreatedOn { get; set; }
        public int UserId { get; set; }
    }
}