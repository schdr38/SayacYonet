namespace webapi.Controllers.Resources
{
    public class KeyValueResource
    {
        public string Id { get; set; }
        public string adi { get; set; }
        public KeyValueResource(string id,string adi)
        {
            this.Id = id;
            this.adi = adi;
        }
        public KeyValueResource()
        {
            
        }
    }
}