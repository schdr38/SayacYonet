

using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Threading.Tasks;
using Microsoft.Extensions.Options;
using MongoDB.Bson;
using MongoDB.Driver;
using MongoDB.Driver.Linq;
using webapi.Core.Extensions;
using webapi.Core.IRepository;
using webapi.Core.Models;
using webapi.Core.Models.Site;

namespace webapi.Persistance.Repository
{
    public class SiteRepository :GenericRepository<Site>, ISiteRepository
    {
        public SiteRepository(IOptions<Settings> settings) : base(settings)
        {}

        public async Task<List<Tuple<string, string>>> SitelerIdIsimGetirAsync()
        {
            var site = await collection.AsQueryable().Select(s => new Tuple<string, string>(s.Id, s.adi)).ToListAsync();
            return site;
        }
        public override async Task<QueryResult<Site>> GetsByQuery(IQueryObject queryObject)
        {
        var sonuc = new QueryResult<Site>();
        var  collectionQuery = collection.AsQueryable();
        var columnsMap = new Dictionary<string,Expression<Func<Site,object>>>()
         {
             ["adi"] = s=>s.adi
         };
        if(!String.IsNullOrEmpty(queryObject.filter))
            collectionQuery = collectionQuery.Where(s=>s.adi.ToLower().Contains(queryObject.filter.ToLower()));
        collectionQuery = collectionQuery.ApplyOrdering(queryObject,columnsMap);
        //pagination işlemi için öncelikle toplam eleman sayısı girilmelidir 
        //bu yüzden sayfalama işleminden önce toplam eleman sayısı girilmesi gerekir
        sonuc.TotalItems = await collectionQuery.CountAsync();    
        collectionQuery = collectionQuery.ApplyPaging(queryObject);
        sonuc.Items = await  collectionQuery.ToListAsync();
        return sonuc;
        }

        public async Task<Site> SiteGetirKazanIdIleAsync(string id)
        {
            var filter = Builders<Site>.Filter.Eq("kazanlar",id);
            var site = await collection.Find(filter).FirstOrDefaultAsync();
            return site;
        }

        public async Task<Site> SiteGetirBlokIdIle(string id)
        {
            var filter = Builders<Site>.Filter.Eq("bloklar",id);
            var site = await collection.Find(filter).FirstOrDefaultAsync();
            return site;
        }
    }
}