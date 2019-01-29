namespace webapi.Core.Models
{
    public class KeyValue
    {
        
            public string adi { get; set; }
            public string Id { get; set; }

            public KeyValue(string id,string adi)
            {
                this.Id = id;
                this.adi = adi;
            }
            public KeyValue()
            {
                
            }
    }
}