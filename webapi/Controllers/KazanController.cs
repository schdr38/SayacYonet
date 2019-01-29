using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AutoMapper;
using Microsoft.AspNetCore.Mvc;
using MongoDB.Bson;
using webapi.Controllers.Resources;
using webapi.Core.Extensions;
using webapi.Core.IRepository;
using webapi.Core.Models;
using webapi.Core.Models.Kazan;

namespace webapi.Controllers
{
    [Route("api/[controller]")]
    public class KazanController : Controller
    {
        private readonly IKazanRepository kazanRepository;
        private readonly ISiteRepository siteRepository;
        private readonly IMapper mapper;
        public KazanController(IKazanRepository kazanRepository, IMapper mapper,ISiteRepository siteRepository)
        {
            this.mapper = mapper;
            this.kazanRepository = kazanRepository;
            this.siteRepository = siteRepository;
        }
        [HttpPost]
        public async Task<ActionResult> KazanEkleAsync([FromBody]KazanResource kazanResource)
        {
            if(!ModelState.IsValid)
                return BadRequest(ModelState);
            var site = await siteRepository.FindOne(kazanResource.siteId);
            if(site == null)
                return BadRequest(Json("yanlış bir site girildi"));
            var kazan = this.mapper.Map<KazanResource,Kazan>(kazanResource);
            var addedKazan = await kazanRepository.AddAsync(kazan);
            if(site.kazanlar == null)
                site.kazanlar = new List<string>();
            site.kazanlar.Add(addedKazan.Id);
            var sonuc = await   siteRepository.UpdateAsync(site);
            if(sonuc == true)
                return  Ok(Json("Başarılı"));
            return BadRequest(Json("Başarısız"));
        }
        [HttpGet("{id:length(24)}")]
         public async Task<ActionResult> KazanGetirAsync(string id)
        {
            var kazan = await kazanRepository.FindOne(id);    
            if(!string.IsNullOrEmpty(kazan.Id))
                return Ok(kazan);
            return NotFound();
        } 
        [HttpGet]
        public async Task<ActionResult> KazanlariListeleAsync(KazanQueryResource kazanQueryResource)
        {
            if(!kazanQueryResource.siteId.IsValidObjectId())
                return NotFound();
            
            var kazanQuery = this.mapper.Map<KazanQueryResource,KazanQuery>(kazanQueryResource);
            var site = await siteRepository.FindOne(kazanQueryResource.siteId);
            if(site == null || site.kazanlar== null)
                return NotFound();            
            var queryResult = await kazanRepository.GetsByQuery(site.kazanlar,kazanQuery);
            return Ok(mapper.Map<QueryResult<Kazan>,QueryResultResource<KazanListeleResource>>(queryResult));
        
        } 
         [HttpPut("{id:length(24)}")]
        public async Task<ActionResult> KazanGuncelleAsync(string id,[FromBody]KazanResource kazanResource)
        {
            //öncelikle sitenin idsini kullanmak için tut sonra veritabanından bu id ile olan veriyi getir eğer yoksa
            //bulanamadı dön yoksa güncellenmesi için kazan ekle modelden kazana dönüştür
            //sonra güncelle başarılı olduysa olumlu döndür yoksa başarısız mesajını döndür
            if(!ModelState.IsValid)
                return BadRequest(ModelState);
            var kazan = await  kazanRepository.FindOne(id);
            if(kazan == null)
                return NotFound();
            mapper.Map<KazanResource,Kazan>(kazanResource,kazan);
            var site = await siteRepository.SiteGetirKazanIdIleAsync(id);
            if(site == null)
                return NotFound();


            var sonucKznTbl = await  kazanRepository.UpdateAsync(kazan);
            


            if(sonucKznTbl == true)
                return Ok(Json("Başarılı"));
            return Ok(Json("Başarısız"));
        
        }
        [HttpGet("sIdIleKGetir/{id:length(24)}")]
        public async Task<IActionResult> KazanlariSiteIdyeGoreGetirAsync(string id)
        {
            var site = await siteRepository.FindOne(id);
            if(site==null)
                return NotFound();
            else if(site.kazanlar ==null || site.kazanlar.Count == 0)
                return NotFound();
            return Ok(site.kazanlar);
        } 
    }
}
