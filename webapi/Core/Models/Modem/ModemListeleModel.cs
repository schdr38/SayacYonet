namespace webapi.Core.Models.Modem
{
    public class ModemListeleModel:BaseEntity
    {
        public string imeiNo { get; set; }
        public string tel { get; set; }
        public bool durum { get; set; }
        public string kazanId { get; set; }
        public string siteId { get; set; }
    }
}