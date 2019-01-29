namespace webapi.Core.Models.Bloklar
{
    public class BlokListeleModel:BaseEntity
    {  
        
        public string  adi { get; set; }
        public string no { get; set; }
        public int daireSayisi { get; set; }
        public int kapaliAlanMetrekare { get; set; }
        public KeyValue kazan { get; set; }
        public Yonetici yonetici { get; set; }
        public KeyValue site { get; set; }
    }
}