using webapi.Core.Extensions;

namespace webapi.Controllers.Resources.Daire
{
    public class DaireQueryResource : IQueryObject
    {   public string blokId { get; set; }
        public string SortBy { get; set; }
        public bool IsSortAscending { get; set; }
        public int Page { get; set; }
        public byte PageSize { get; set; }
        public string filter { get; set; }
    }
}