using webapi.Core.Extensions;

namespace webapi.Controllers.Resources.Sayac
{
    public class SayacQueryResource : IQueryObject
        {
        public string SortBy { get ; set ; }
        public bool IsSortAscending { get ; set ; }
        public int Page { get ; set ; }
        public byte PageSize { get ; set ; }
        public string filter { get ; set ; }
        public string blokId { get; set; }
    }
}