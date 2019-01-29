using System.Threading.Tasks;
using AutoMapper;
using Microsoft.AspNetCore.Mvc;
using webapi.Controllers.Resources;
using webapi.Controllers.Resources.Daire;
using webapi.Core.Extensions;
using webapi.Core.IRepository;
using webapi.Core.Models;
using webapi.Core.Models.Daire;

namespace webapi.Controllers
{
    [Route("api/[controller]")]
    public class DaireController : Controller
    {
        private readonly IDaireRepository daireRepository;
        private readonly IBlokRepository blokRepository;
        private readonly IMapper mapper;
        public DaireController (IDaireRepository daireRepository, IMapper mapper,IBlokRepository blokRepository)
        {
            this.mapper = mapper;
            this.daireRepository = daireRepository;
            this.blokRepository = blokRepository;
        }
        [HttpPost]
        public async Task<IActionResult> AddDaireAsync([FromBody] DaireEkleResource daireResource)
        {
            
            if (!ModelState.IsValid)
                return BadRequest(ModelState);

            var daire = mapper.Map<DaireEkleResource, Daire>(daireResource);
            var sonuc = await daireRepository.AddAsync(daireResource.blokId,daire);

            if(sonuc==true)
            return Ok(Json("Başarılı"));
            return BadRequest();

        }
        [HttpPut("duzenle")]
        public async Task<IActionResult> UpdateDaire([FromBody] DaireUpdateResource daireResource)
        {
            if(!ModelState.IsValid) 
                return BadRequest(ModelState);



            var daire = await  daireRepository.FindOneAsync(daireResource.Id);
            if(daire == null)
                return NotFound();
            mapper.Map<DaireUpdateResource,Daire>(daireResource,daire);
            var result = await daireRepository.UpdateAsync(daire);
            if(result == true)
                return Ok(Json("Başarılı"));
            return Ok(Json("Başarısız"));   
        }
        [HttpGet]
        public async Task<IActionResult> DaireleriListele(DaireQueryResource daireQueryResource)
        {
             var daireQuery = this.mapper.Map<DaireQueryResource,DaireQuery>(daireQueryResource);   
            var queryResult = await daireRepository.GetsByQuery(daireQuery);

            return Ok(mapper.Map<QueryResult<Daire>,QueryResultResource<DaireEkleResource>>(queryResult));
        }

        [HttpGet("{id:length(24)}")]
        public async Task<IActionResult> DaireGetir(string id)
        {
            if(!id.IsValidObjectId())
                return NotFound();
            var daire = await daireRepository.FindOneAsync(id);
            if(daire == null)
                return NotFound();
            var daireResource = mapper.Map<Daire,DaireUpdateResource>(daire);
            return Ok(daireResource);
            
        }


    }
}
