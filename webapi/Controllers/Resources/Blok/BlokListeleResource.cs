using webapi.Core.Models;

namespace webapi.Controllers.Resources.Blok
{
    public class BlokListeleResource
    
    {   public string Id { get; set; }
        public string adi { get; set; }
        public int no { get; set; }
        public int daireSayisi { get; set; }
        public int kapaliAlanMetrekare { get; set; }
        public KeyValue kazan { get; set; }
        public Yonetici yonetici { get; set; }
        public KeyValue site { get; set; }
    }
}