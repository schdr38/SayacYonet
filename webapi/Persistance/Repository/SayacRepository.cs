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
using webapi.Core.Extensions;
using webapi.Core.Models;
using webapi.Core.Models.Bloklar;
using webapi.Core.Models.Sayac;

namespace webapi.Persistance.Repository
{
    public class SayacRepository : ISayacRepository
    {   private readonly IMapper mapper;
        private readonly SayacYonetimContext context;
        protected  IMongoCollection<Blok> collection ;


          public SayacRepository(IOptions<Settings> settings, IMapper mapper)
        {
            this.mapper = mapper;
            this.context = new SayacYonetimContext(settings);
            
            this.collection = context.database.GetCollection<Blok>("Blok");

        }
        public async Task<bool> UpdateAsync(Sayac entity)
        {   var filter = Builders<Blok>.Filter.Eq("sayaclar._id",ObjectId.Parse(entity.Id));
            var blok = collection.Find(filter).FirstOrDefault();
            if(blok == null)
                return false ;
            blok.sayaclar.Where(s=>s.Id == entity.Id).Select(s=>{
                s = entity;
                return s;
            });
            var sonuc  = await  collection.ReplaceOneAsync(b=>b.Id == blok.Id,blok
            ,new UpdateOptions{IsUpsert= true});
            return sonuc.IsAcknowledged&&sonuc.ModifiedCount>0;
        }

        public bool Delete(Sayac entity)
        {
            throw new System.NotImplementedException();
        }

        public async Task<Sayac> FindOneAsync(string id)
        {
            var filter = Builders<Blok>.Filter.Eq("sayaclar._id",ObjectId.Parse(id));
            var blok = await collection.Find(filter).FirstOrDefaultAsync();
            if(blok == null)
                return null;
            var sayac = blok.sayaclar.FirstOrDefault(s=>s.Id==id);
            return sayac;

        }
      

        public Task<ICollection> GetAll()
        {
            throw new System.NotImplementedException();
        }

        public async Task<QueryResult<Sayac>> GetsByQuery(IQueryObject queryObject)
        {   var queryResult = new QueryResult<Sayac>();
            var query = queryObject as SayacQuery;
            var filter = Builders<Blok>.Filter.Eq("_id",ObjectId.Parse(query.blokId));
            var blok = await collection.Find(filter).FirstOrDefaultAsync();
            var sayaclarQuery = blok.sayaclar.AsQueryable();
            var columnsMap = new Dictionary<string,Expression<Func<Sayac,object>>>()
         {
             ["tipi"] = d=>d.tipi
         };
        sayaclarQuery = sayaclarQuery.ApplyOrdering(queryObject,columnsMap);
        queryResult.TotalItems = sayaclarQuery.Count();
        sayaclarQuery = sayaclarQuery.ApplyPaging(queryObject);
        queryResult.Items =  sayaclarQuery.ToList();
        return queryResult;
        }

        public async Task<bool> AddAsync(string parentId,Sayac entity)
        {
             
            var blok = await collection.Find(b=>b.Id== parentId).FirstOrDefaultAsync();
            if(blok == null)
                return false;
            entity.Id = ObjectId.GenerateNewId().ToString();
            if(blok.sayaclar == null)
                blok.sayaclar = new List<Sayac>();
            blok.sayaclar.Add(entity);
            var sonuc  = await  collection.ReplaceOneAsync(o=>o.Id == blok.Id,blok
            ,new UpdateOptions{IsUpsert= true});
            return sonuc.IsAcknowledged&&sonuc.ModifiedCount>0;
        }
    }
}