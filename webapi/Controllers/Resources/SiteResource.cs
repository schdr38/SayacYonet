using webapi.Core.Models;
using webapi.Core.Models.Kazan;

namespace webapi.Controllers.Resources
{
    public class SiteResource
    {
        public string Id { get; set; }
        public string adi { get; set; }
        public Adres adres { get; set; }
        public Yonetici yonetici { get; set; }
        public bool aktifMi { get; set; }
        public string tel { get; set; }
        public Kazan kazan { get; set; }
        public double manipulasyonKatsayisi { get; set; }
        
    }
}