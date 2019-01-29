

using System;
using System.Collections;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Threading.Tasks;
using AutoMapper;
using Microsoft.Extensions.Options;
using MongoDB.Bson;
using MongoDB.Driver;
using MongoDB.Driver.Linq;
using webapi.Core.Extensions;
using webapi.Core.IRepository;
using webapi.Core.Models;
using webapi.Core.Models.Modem;

namespace webapi.Persistance.Repository
{
    public class ModemRepository : GenericRepository<Modem>, IModemRepository
    {
        public ModemRepository(IOptions<Settings> settings) : base(settings)
        {
        }
                public async Task<QueryResult<Modem>> GetsByQuery(List<string> modemIdler,IQueryObject queryObject)
        {
           var sonuc = new QueryResult<Modem>();
           var fdb = Builders<Modem>.Filter;
           var filter = fdb.In(b=>b.Id,modemIdler);
           var modemler = await collection.Find(filter).ToListAsync();
           var modemlerQuery =modemler.AsQueryable();
           if(!String.IsNullOrEmpty(queryObject.filter) )
              modemlerQuery = modemlerQuery.Where(m=>m.kazanId==queryObject.filter);

           var columnsMap = new Dictionary<string,Expression<Func<Modem,object>>>()
           {
               ["imeiNo"]= b=>b.imeiNo

           };
        //sütüne göre sıralama için
        modemlerQuery = modemlerQuery.ApplyOrdering(queryObject,columnsMap);
        sonuc.TotalItems = modemlerQuery.Count();
        modemlerQuery = modemlerQuery.ApplyPaging(queryObject);
        sonuc.Items = modemlerQuery.ToList();
        return sonuc;
        }
    }
}