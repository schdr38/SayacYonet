using System.Threading.Tasks;
using AutoMapper;
using Microsoft.AspNetCore.Mvc;
using webapi.Controllers.Resources;
using webapi.Core.IRepository;
using webapi.Core.Models;
using webapi.Core.Models.Site;

namespace webapi.Controllers
{
    [Route("api/[controller]")]
    public class SitesController : Controller
    {
        private readonly ISiteRepository sitesRepository;
        private readonly IMapper mapper;
        public SitesController(ISiteRepository sitesRepository, IMapper mapper)
        {
            this.mapper = mapper;
            this.sitesRepository = sitesRepository;
        }
        [HttpPost]
        public async Task<IActionResult> AddSite([FromBody] SiteResource siteResource)
        {
            if(!ModelState.IsValid)
                return BadRequest(ModelState);
            var site = mapper.Map<SiteResource,Site>(siteResource);
            await this.sitesRepository.AddAsync(site);
            return Ok(Json("Tamamlandı"));
        }
        [HttpGet("{id:length(24)}")]
        public async Task<IActionResult> GetSite(string id)
        {
            var site = await sitesRepository.FindOne(id);
            if(site== null)
                return NotFound();
            var siteResource =mapper.Map<Site,SiteResource>(site);
            return Ok(siteResource);
        }

        [HttpGet]
        public async Task<IActionResult> GetSites(SiteQueryResource siteQueryResource)
        {
            var siteQuery = this.mapper.Map<SiteQueryResource,SiteQuery>(siteQueryResource);   
            var queryResult = await sitesRepository.GetsByQuery(siteQuery);

            return Ok(mapper.Map<QueryResult<Site>,QueryResultResource<SiteResource>>(queryResult));
        }
        [HttpPut("{id:length(24)}")]
        public async Task<IActionResult> UpdateSite(string id,[FromBody] SiteResource siteResource)
        {
            if(!ModelState.IsValid)
                return BadRequest(ModelState);
            
            var site = mapper.Map<SiteResource,Site>(siteResource);
            
            var sonuc = await sitesRepository.UpdateAsync(site);
            if(!sonuc)
                return Ok();
            return Ok(mapper.Map<Site,SiteResource>(site));
        }
        [HttpGet("namesAndIds")]
        public async Task<IActionResult> GetSitesIdAndName()
        {
            var siteler = await sitesRepository.SitelerIdIsimGetirAsync();
            return Ok(siteler) ;
        }

    }
}