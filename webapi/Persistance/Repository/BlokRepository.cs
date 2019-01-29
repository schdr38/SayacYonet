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
using webapi.Core.Models.Bloklar;

namespace webapi.Persistance.Repository
{
    public class BlokRepository:GenericRepository<Blok>,IBlokRepository
    {

        public BlokRepository(IOptions<Settings> settings) : base(settings)
        {
        }
        public async Task<Blok> BlokGetirBySayacIdAsync(string id)
        {
            var filter = Builders<Blok>.Filter.Eq("sayaclar._id",ObjectId.Parse(id));
            var blok = await collection.Find(filter).FirstOrDefaultAsync();
            return blok;
        }
  
  
    






        public async Task<QueryResult<Blok>> GetsByQuery(List<string> blokIdler,IQueryObject queryObject)
        {
           var sonuc = new QueryResult<Blok>();
           var fdb = Builders<Blok>.Filter;
           var filter = fdb.In(b=>b.Id,blokIdler);
           var bloklar = await collection.Find(filter).ToListAsync();
           var bloklarQuery = bloklar.AsQueryable();

           var columnsMap = new Dictionary<string,Expression<Func<Blok,object>>>()
           {
               ["blokAdi"]= b=>b.adi,
                ["blokNo"]= b=>b.adi

            };

         if(!String.IsNullOrEmpty(queryObject.filter))
            bloklarQuery = bloklarQuery.Where(s=>s.adi.ToLower().Contains(queryObject.filter.ToLower()));
        //sütüne göre sıralama için
        bloklarQuery = bloklarQuery.ApplyOrdering(queryObject,columnsMap);
        sonuc.TotalItems = bloklarQuery.Count();
        bloklarQuery = bloklarQuery.ApplyPaging(queryObject);
        sonuc.Items = bloklarQuery.ToList();
        return sonuc;
        }

     
    }
}