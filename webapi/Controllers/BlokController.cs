using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AutoMapper;
using Microsoft.AspNetCore.Mvc;
using MongoDB.Bson;
using webapi.Controllers.Resources;
using webapi.Controllers.Resources.Blok;
using webapi.Controllers.Resources.BlokFolder;
using webapi.Core.IRepository;
using webapi.Core.Models;
using webapi.Core.Models.Bloklar;

namespace webapi.Controllers
{
    [Route("api/[controller]")]
    public class BlokController : Controller
    { 
        private readonly IMapper mapper;
        private readonly IBlokRepository blokRepository;
        private readonly ISiteRepository siteRepository;
        private readonly IKazanRepository kazanRepository;
        public BlokController(IMapper mapper, IBlokRepository blokRepository, 
        ISiteRepository siteRepository, IKazanRepository kazanRepository)
        {
            this.kazanRepository = kazanRepository;
            this.siteRepository = siteRepository;
            this.blokRepository = blokRepository;
            this.mapper = mapper;

        }
        #region HelperMethods
        private async Task<bool> IsKazanExistAsync(string kazanId)
        {
            var kazan = await  kazanRepository.FindOne(kazanId);
            if(kazan == null)
                return false;
            return true ;
        }

            
        #endregion
        [HttpPost]
        public async Task<IActionResult> BlokEkleAsync([FromBody] BlokResource blokResource)
        {   //Model Doğrumu yanlış mı kontrol et
            if (!ModelState.IsValid)
                  return BadRequest(ModelState);
            var kazan = await kazanRepository.FindOne(blokResource.kazanId);
            var site = await siteRepository.FindOne(blokResource.siteId);

            if(site == null || kazan == null)
                return BadRequest();
            //kaydedilmek istenen blokun site ve kazan bilgilerin gerçek olup olmadığını kontrol et
            var blok = mapper.Map<BlokResource, Blok>(blokResource);
            var addedBlok = await blokRepository.AddAsync(blok);
            if(site.bloklar == null)
                site.bloklar = new List<string>();   
            if(!site.bloklar.Contains(addedBlok.Id))
                site.bloklar.Add(addedBlok.Id);
            var sonucSite = await siteRepository.UpdateAsync(site);
            if(sonucSite == true)
                return Ok(Json("Başarılı"));
            return Ok(Json("Başarısız"));

        }

        //Guncelle
        [HttpGet("{id:length(24)}")]
        public async Task<IActionResult> BlokGetir(string id) 
        {
            var blok = await blokRepository.FindOne(id);
            if(blok==null)                         
                return NotFound();                                          
            var blokResource = mapper.Map<Blok,BlokListeleResource>(blok);
            var site = await siteRepository.SiteGetirBlokIdIle(id);
            blokResource.site = new KeyValue(site.Id,site.adi);
            blokResource.kazan = new KeyValue(){Id=blok.kazanId};         
            return Ok(blokResource);
        }

        [HttpPut("duzenle")]
        public async Task<IActionResult> BlokGuncelle([FromBody] BlokDuzenleResource blokDuzenleResource)
        {
             if (!ModelState.IsValid)
               return BadRequest(ModelState);
             var kazan = await kazanRepository.FindOne(blokDuzenleResource.kazan.Id);
             var blok = await blokRepository.FindOne(blokDuzenleResource.Id);
             if(kazan==null || blok==null)
                return BadRequest();
            mapper.Map<BlokDuzenleResource,Blok>(blokDuzenleResource,blok);
            var result = await blokRepository.UpdateAsync(blok);
             if(result)
                 return Ok(Json("Başarılı"));
             return Ok(Json("Başarısız"));
        }
        
        [HttpGet]
        public async Task<IActionResult> BloklariListeleAsync(BlokQueryResource blokQueryResource)
        {
            if(!ModelState.IsValid)
                return Ok();
            var blokQuery = this.mapper.Map<BlokQueryResource,BlokQuery>(blokQueryResource);
            var site = await siteRepository.FindOne(blokQuery.siteId);
            if(site == null)
                return NotFound();
            if(site.bloklar == null)
                return NotFound();   
            var queryResult = await blokRepository.GetsByQuery(site.bloklar,blokQuery);

            var queryResultResource = new QueryResultResource<BlokListeleResource>();
            queryResultResource.TotalItems = queryResult.TotalItems;
            var bloklar = new List<BlokListeleResource>();
            foreach (var item in queryResult.Items)
            {
                var kazan = await kazanRepository.FindOne(item.kazanId);
                var s = await siteRepository.SiteGetirBlokIdIle(item.Id);
                var blokResource = mapper.Map<Blok,BlokListeleResource>(item);

                blokResource.kazan = new KeyValue(){adi = kazan.adi,Id = kazan.Id};
                blokResource.site = new KeyValue(){adi = site.adi,Id = site.Id};
                bloklar.Add(blokResource);
            }
            queryResultResource.Items = bloklar;
            return Ok(queryResultResource);
        } 
     
    }
}