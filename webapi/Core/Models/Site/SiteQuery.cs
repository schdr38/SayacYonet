using webapi.Core.Extensions;

namespace webapi.Core.Models.Site
{
    //Site Tablosunda Sayfa değiştirme sıralama gibi işlemler için kullanılır
    public class SiteQuery:IQueryObject
    {
         public string SortBy { get; set; }
        public int Page { get; set; }
        public byte PageSize { get; set; }
        public bool IsSortAscending { get; set; }
        public string filter { get; set; }
    
    }
}