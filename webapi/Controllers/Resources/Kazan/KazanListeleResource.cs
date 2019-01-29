using System.ComponentModel.DataAnnotations;
using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;
using webapi.Core.Models;

namespace webapi.Controllers.Resources
{
    public class KazanListeleResource
    {   [BsonId]
        [BsonRepresentation(BsonType.ObjectId)]
        public string Id { get; set; }
        [Required]
        public string adi { get; set; }
        public bool IsiIstasyonuVarMi { get; set; }
        public bool OrtakSicakSuKaloriMetreVarMi { get; set; }
        public bool daireKalorimetre { get; set; }
        public bool daireSicakSuSayac { get; set; }
        public bool daireSogukSuSayac { get; set; }
        public bool dairePayOlcer { get; set; }
        
    }
}