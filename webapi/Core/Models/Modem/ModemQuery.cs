using webapi.Core.Extensions;

namespace webapi.Core.Models.Modem
{
    public class ModemQuery : IQueryObject
    {
        public string SortBy { get ; set ; }
        public bool IsSortAscending { get ; set ; }
        public int Page { get ; set ; }
        public byte PageSize { get ; set ; }
        public string filter { get ; set ; }
        public string siteId { get; set; }
    }
}