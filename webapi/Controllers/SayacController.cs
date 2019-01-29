

using System.Threading.Tasks;
using AutoMapper;
using Microsoft.AspNetCore.Mvc;
using webapi.Controllers.Resources;
using webapi.Controllers.Resources.Sayac;
using webapi.Core.Extensions;
using webapi.Core.IRepository;
using webapi.Core.Models;
using webapi.Core.Models.Sayac;

namespace webapi.Controllers
{
    [Route("api/[controller]")]
    public class SayacController : Controller
    {
        private readonly ISayacRepository sayacRepository;
        private readonly IBlokRepository blokRepository;
        private readonly IMapper mapper;
        private readonly ISiteRepository siteRepository;
        public SayacController(ISayacRepository sayacRepository, ISiteRepository siteRepository, IMapper mapper, IBlokRepository blokRepository)
        {
            this.siteRepository = siteRepository;
            this.mapper = mapper;
            this.sayacRepository = sayacRepository;
            this.blokRepository = blokRepository;
        }
        [HttpPost]
        public async Task<IActionResult> AddSayacAsync([FromBody] SayacEkleResource sayacResource)
        {

            if (!ModelState.IsValid)
                return BadRequest(ModelState);

            var sayac = mapper.Map<SayacEkleResource, Sayac>(sayacResource);
            var sonuc = await sayacRepository.AddAsync(sayacResource.blokId, sayac);
            if (sonuc == true)
                return Ok(Json("Başarılı"));
            return BadRequest();



        }
        [HttpPut("duzenle")]
        public async Task<IActionResult> UpdateSayac([FromBody] SayacUpdateResource sayacResource)
        {
            if (!ModelState.IsValid)
                return BadRequest(ModelState);

            var sayac = await sayacRepository.FindOneAsync(sayacResource.Id);
            if (sayac == null)
                return NotFound();
            mapper.Map<SayacUpdateResource, Sayac>(sayacResource, sayac);
            var result = await sayacRepository.UpdateAsync(sayac);
            if (result == true)
                return Ok(Json("Başarılı"));
            return Ok(Json("Başarısız"));
        }
        [HttpGet]
        public async Task<IActionResult> SayaclariListele(SayacQueryResource sayacQueryResource)
        {
            var sayacQuery = this.mapper.Map<SayacQueryResource, SayacQuery>(sayacQueryResource);
            var queryResult = await sayacRepository.GetsByQuery(sayacQuery);

            return Ok(mapper.Map<QueryResult<Sayac>, QueryResultResource<SayacUpdateResource>>(queryResult));
        }

        [HttpGet("{id:length(24)}")]
        public async Task<IActionResult> SayacGetir(string id)
        {
            if (!id.IsValidObjectId())
                return NotFound();
            var sayac = await sayacRepository.FindOneAsync(id);
            if (sayac == null)
                return NotFound();
            var sayacResource = mapper.Map<Sayac, SayacUpdateResource>(sayac);
            //sayacResource blokId atama
            var blok = await blokRepository.BlokGetirBySayacIdAsync(id);
            sayacResource.blokId = blok.Id;

            //sayacResource site id  atama
            var site = await siteRepository.SiteGetirBlokIdIle(blok.Id);
            sayacResource.siteId = site.Id;
            return Ok(sayacResource);

        }


    }
}
