using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using webapi.Core.Models;
using webapi.Core.Models.Site;

namespace webapi.Core.IRepository
{
    public interface ISiteRepository:IGenericRepository<Site>
    {
        Task<List<Tuple<string, string>>> SitelerIdIsimGetirAsync();
        Task<Site> SiteGetirKazanIdIleAsync(string id);
        Task<Site> SiteGetirBlokIdIle(string id);

    }
}