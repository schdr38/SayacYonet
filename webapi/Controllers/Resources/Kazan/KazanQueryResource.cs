using webapi.Core.Extensions;

namespace webapi.Controllers.Resources
{
    public class KazanQueryResource : IQueryObject
    {
        public string SortBy { get; set; }
        public int Page { get; set; }
        public byte PageSize { get; set; }
        public bool IsSortAscending { get; set; }
        public string siteId { get; set; }
        public string filter { get; set; }
    }
}