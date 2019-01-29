using System.ComponentModel.DataAnnotations;
using webapi.Core.Extensions;

namespace webapi.Controllers.Resources.Modem
{
    public class ModemQueryResource : IQueryObject
    {
        public string SortBy { get; set; }
        public bool IsSortAscending { get; set; }
        public int Page { get; set; }
        public byte PageSize { get; set; }
        public string filter { get; set; }
        [Required,ValidId]
        public string siteId { get; set; }

                 
    }
}