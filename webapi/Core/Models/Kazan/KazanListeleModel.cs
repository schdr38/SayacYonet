using AutoMapper;

namespace webapi.Core.Models.Kazan
{
    public class KazanListeleModel:BaseEntity
    {   public string adi { get; set; }
        public bool IsiIstasyonuVarMi { get; set; }
        public bool OrtakSicakSuKaloriMetreVarMi { get; set; }
        public bool daireKalorimetre { get; set; }
        public bool daireSicakSuSayac { get; set; }
        public bool daireSogukSuSayac { get; set; }
        public bool dairePayOlcer { get; set; }
        public KeyValue site { get; set; }

    }
  
}