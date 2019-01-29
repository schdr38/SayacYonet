using System.ComponentModel.DataAnnotations;
using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;

namespace webapi.Controllers.Resources
{
    public class KazanResource
    {
         [BsonId]
        [BsonRepresentation(BsonType.ObjectId)]
        public string Id { get; set; }
        [Required,MaxLength(255)]
        public string adi { get; set; }
        public bool IsiIstasyonuVarMi { get; set; }
        public bool OrtakSicakSuKaloriMetreVarMi { get; set; }
        public bool daireKalorimetre { get; set; }
        public bool daireSicakSuSayac { get; set; }
        public bool daireSogukSuSayac { get; set; }
        public bool dairePayOlcer { get; set; }
        public string siteId { get; set; }
    }
}