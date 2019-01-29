namespace webapi.Core.Models.Daire
{
    public class DaireListeleModel:BaseEntity
    {
        public int kapiNo { get; set; }
        public string adSoyad { get; set; }
        public bool kiraciMi { get; set; }
        
        public Kullanici kullanici { get; set; }
        public string not { get; set; }
        public KeyValue blok { get; set; }
        public KeyValue site { get; set; }
        public string blokId { get; set; }

    }
}