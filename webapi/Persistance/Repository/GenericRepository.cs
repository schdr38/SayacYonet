using System;
using System.Collections;
using System.Collections.Generic;
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

namespace webapi.Persistance.Repository
{
    public  class GenericRepository<T> : IGenericRepository<T> where T : BaseEntity
    {
        protected readonly SayacYonetimContext context;
        private readonly IOptions<Settings> settings;
        protected  IMongoCollection<T> collection ;
        public  GenericRepository(IOptions<Settings> settings)
        {
            this.settings = settings;
            this.context = new SayacYonetimContext(this.settings);
            var collectionName = typeof(T).Name;
            this.collection = context.database.GetCollection<T>(collectionName);

        }

        public virtual async Task<T> AddAsync(T entity)
        {
           
           entity.Id = ObjectId.GenerateNewId().ToString();
           
           await collection.InsertOneAsync(entity);
           return entity ;
        }

        public bool Delete(T entity)
        {
            throw new NotImplementedException();
        }

        public virtual async Task<QueryResult<T>> GetsByQuery(IQueryObject queryObject)
        {
        var sonuc = new QueryResult<T>();
        var  collectionQuery = collection.AsQueryable();
        //pagination işlemi için öncelikle toplam eleman sayısı girilmelidir 
        //bu yüzden sayfalama işleminden önce toplam eleman sayısı girilmesi gerekir
        sonuc.TotalItems = await collectionQuery.CountAsync();    
        collectionQuery = collectionQuery.ApplyPaging(queryObject);
        sonuc.Items = await  collectionQuery.ToListAsync();
        return sonuc;
        }

        public  virtual async Task<T> FindOne(string id)
        {
          var entity = await this.collection.Find(t=>t.Id == id).FirstOrDefaultAsync();
          return entity;
        }

        public virtual async  Task<ICollection> GetAll()
        {
            var table = await  collection.Find(s=>true).ToListAsync();
            return table;     
       }

        public  virtual async  Task<bool> UpdateAsync(T entity)
        {
            var sonuc  = await  collection.ReplaceOneAsync(o=>o.Id == entity.Id,entity
            ,new UpdateOptions{IsUpsert= true});
            return sonuc.IsAcknowledged&&sonuc.ModifiedCount>0;
        }


    }
}