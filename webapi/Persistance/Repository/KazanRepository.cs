using System;
using System.Collections;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Text.RegularExpressions;
using System.Threading.Tasks;
using AutoMapper;
using Microsoft.Extensions.Options;
using MongoDB.Bson;
using MongoDB.Driver;
using MongoDB.Driver.Linq;
using webapi.Controllers.Resources;
using webapi.Core.Extensions;
using webapi.Core.IRepository;
using webapi.Core.Models;
using webapi.Core.Models.Kazan;

namespace webapi.Persistance.Repository
{
    public class KazanRepository : GenericRepository<Kazan>, IKazanRepository
    {
        public KazanRepository(IOptions<Settings> settings) : base(settings)
        {
        }
       public async Task<QueryResult<Kazan>> GetsByQuery(List<string> kazanIdler,IQueryObject queryObject)
       {
          
           var sonuc = new QueryResult<Kazan>();
           var fdb = Builders<Kazan>.Filter;
           var filter = fdb.In(k=>k.Id,kazanIdler);
           var kazanlar = await collection.Find(filter).ToListAsync();
           var kazanQuery = kazanlar.AsQueryable();

           var columnsMap = new Dictionary<string,Expression<Func<Kazan,object>>>()
           {
               ["adi"]= k=>k.adi
             };
           if(!String.IsNullOrEmpty(queryObject.filter))
            kazanQuery = kazanQuery.Where(s=>s.adi.ToLower().Contains(queryObject.filter.ToLower()));
           sonuc.TotalItems =  kazanQuery.Count();
           kazanQuery = kazanQuery.ApplyPaging(queryObject);
           sonuc.Items =  kazanQuery.ToList();
           return sonuc;
           

       }
       

    }
}