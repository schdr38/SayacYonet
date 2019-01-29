using MongoDB.Bson.Serialization.Attributes;

namespace webapi.Core.Models.Modem
{
    public class ModemListeleResource
    {   public string Id { get; set; }
        public string imeiNo { get; set; }
        public string tel { get; set; }
        
        public bool durum { get; set; }
        
        public KeyValue kazan { get; set; }
        public KeyValue site { get; set; }
    }
}