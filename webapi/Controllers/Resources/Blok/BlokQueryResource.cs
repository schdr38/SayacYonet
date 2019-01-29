using System.ComponentModel.DataAnnotations;
using webapi.Core.Extensions;

namespace webapi.Controllers.Resources.Blok
{
    public class BlokQueryResource : IQueryObject
    {
        public string SortBy { get ; set ; }
        public bool IsSortAscending { get ; set ; }
        public int Page { get ; set ; }
        public byte PageSize { get ; set ; }
        public string filter { get ; set ; }
        [Required]
        public string siteId { get; set; }
    }
}