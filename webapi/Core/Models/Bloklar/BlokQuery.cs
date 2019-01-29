using webapi.Core.Extensions;

namespace webapi.Core.Models.Bloklar
{
    public class BlokQuery:IQueryObject
    {
        public string SortBy { get; set; }
        public int Page { get; set; }
        public byte PageSize { get; set; }
        public bool IsSortAscending { get; set; }
        public string siteId { get; set; }
        public string filter { get; set; }
    }
}