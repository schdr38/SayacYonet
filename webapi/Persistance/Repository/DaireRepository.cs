

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
using webapi.Core.Models.Bloklar;
using webapi.Core.Models.Daire;

namespace webapi.Persistance.Repository
{
    public class DaireRepository :  IDaireRepository
    {
        private readonly IBlokRepository blokRepository;
        private readonly IMapper mapper;
        private readonly SayacYonetimContext context;
        protected  IMongoCollection<Blok> collection ;


          public DaireRepository( IBlokRepository blokRepository,IOptions<Settings> settings, IMapper mapper)
        {
            this.blokRepository = blokRepository;
            this.mapper = mapper;
            this.context = new SayacYonetimContext(settings);
            
            this.collection = context.database.GetCollection<Blok>("Blok");

        }


        public async Task<bool> AddAsync(string parentId,Daire daire)

        {
           
                daire.Id = ObjectId.GenerateNewId().ToString();
                var blok = await blokRepository.FindOne(parentId);
                if(blok == null)
                        return false;
                if(blok.daireler == null) blok.daireler = new List<Daire>();
                blok.daireler.Add(daire);
                var blokSonuc = await blokRepository.UpdateAsync(blok);
                if(blokSonuc == false)
                    return false;
                return true;

        }

        public bool Delete(Daire entity)
        {
            throw new NotImplementedException();
        }

        public async Task<Daire> FindOneAsync(string id)
        {
            var filter = Builders<Blok>.Filter.Eq("daireler._id",ObjectId.Parse(id));
            var blok = await collection.Find(filter).FirstOrDefaultAsync();
            if(blok == null)
                return null;
            var daire = blok.daireler.Find(d=>d.Id == id);
            return daire ;

        }

        public async Task<ICollection> GetAll()
        {
            var daireler = await collection.AsQueryable().SelectMany(b=>b.daireler).Distinct().ToListAsync();
            return daireler;
        }

        public  async Task<QueryResult<Daire>> GetsByQuery(IQueryObject queryObject)
        {
          var daireQueryObject = queryObject as DaireQuery ;
          var sonuc = new QueryResult<Daire>();
          var dairelerQuery = collection.AsQueryable().Where(b=>b.Id == daireQueryObject.blokId).SelectMany(b=>b.daireler).Distinct();
          var columnsMap = new Dictionary<string,Expression<Func<Daire,object>>>()
         {
             ["ad"] = d=>d.adSoyad
         };
         dairelerQuery = dairelerQuery.OrderBy(d=>d.kapiNo);
         if(!String.IsNullOrEmpty(queryObject.filter))
            dairelerQuery = dairelerQuery.Where(s=>s.adSoyad.ToLower().Contains(queryObject.filter.ToLower()));
        //sütüne göre sıralama için
        dairelerQuery = dairelerQuery.ApplyOrdering(queryObject,columnsMap);
        sonuc.TotalItems =await dairelerQuery.CountAsync();
        dairelerQuery = dairelerQuery.ApplyPaging(queryObject);
        sonuc.Items =  dairelerQuery.ToList();
        return sonuc;
        }

        public async Task<bool> UpdateAsync(Daire entity)
        {
            var filter = Builders<Blok>.Filter.Eq("daireler._id",ObjectId.Parse(entity.Id));
            var blok  = await collection.Find(filter).FirstOrDefaultAsync();
            var index = blok.daireler.FindIndex(d=>d.Id == entity.Id);
            blok.daireler.RemoveAt(index);
            blok.daireler.Add(entity);
             var sonuc  = await  collection.ReplaceOneAsync(b=>b.Id == blok.Id,blok
            ,new UpdateOptions{IsUpsert= true});
            return sonuc.IsAcknowledged&&sonuc.ModifiedCount>0;
        }
    }
}