
using System.Collections.Generic;
using System.Threading.Tasks;
using AutoMapper;
using Microsoft.AspNetCore.Mvc;
using webapi.Controllers.Resources;
using webapi.Controllers.Resources.Modem;
using webapi.Core.IRepository;
using webapi.Core.Models;
using webapi.Core.Models.Modem;

[Route("api/[controller]")]
public class ModemController:Controller
{
    private readonly IMapper mapper;
    private readonly IModemRepository modemRepository;
    private readonly IKazanRepository kazanRepository;
    private readonly ISiteRepository siteRepository;

    public ModemController(IMapper mapper,IModemRepository modemRepository,IKazanRepository kazanRepository,ISiteRepository siteRepository)
    {
        this.mapper = mapper;
        this.modemRepository = modemRepository;
        this.kazanRepository = kazanRepository;
        this.siteRepository = siteRepository;
    }
    [HttpPost]
    public async Task<IActionResult> ModemEkleAsync([FromBody] ModemEkleResource modemResource)
    {   
        if(!ModelState.IsValid)
            return BadRequest(ModelState);
        var site = await siteRepository.FindOne(modemResource.siteId);
        var kazan = site.kazanlar.Find(k=> k == modemResource.kazanId);
        if(site == null || kazan == null)
            return BadRequest();
        var modem = mapper.Map<ModemEkleResource,Modem>(modemResource);
        var sonuc = await modemRepository.AddAsync(modem);
        if(site.modemler == null)
            site.modemler = new List<string>();
        if(sonuc == null)
            return Ok(Json("Başarısız"));
        site.modemler.Add(sonuc.Id);
        var siteSonuc = siteRepository.UpdateAsync(site);
        
        return Ok(Json("Başarılı"));
    }

    [HttpGet("{id:length(24)}")]
    public async Task<IActionResult> ModemGetirAsync(string id)
    {
        var modem = await modemRepository.FindOne(id);
        if(modem == null)
            return NotFound();
        var kazan = await kazanRepository.FindOne(modem.kazanId);
        var site = await siteRepository.SiteGetirKazanIdIleAsync(kazan.Id);
        var mResource = mapper.Map<Modem,ModemListeleResource>(modem);
        mResource.site = new KeyValue(site.Id,site.adi);
        mResource.kazan = new KeyValue(kazan.Id,kazan.adi);
        return Ok(mResource);
    }
    [HttpPut]
    public async Task<IActionResult> ModemDuzenleAsync([FromBody] ModemDuzenleResource modemResource)
    {
        if(!ModelState.IsValid)
            return BadRequest(ModelState);
        var modem = await modemRepository.FindOne(modemResource.Id);
        if(modem == null)
            return BadRequest();
        mapper.Map<ModemDuzenleResource,Modem>(modemResource,modem);
        var sonuc = await modemRepository.UpdateAsync(modem);
        if(sonuc == true)
            return Ok(Json("Başarılı"));
        return Ok(Json("Başarısız"));
    }

    [HttpGet]
    public async Task<IActionResult> ModemListeleAsync(ModemQueryResource queryResource)
    {
        if(!ModelState.IsValid)
            return NotFound();
        var modemQuery = this.mapper.Map<ModemQueryResource,ModemQuery>(queryResource);
        var site = await siteRepository.FindOne(queryResource.siteId);
        if(site == null || site.modemler == null || site.modemler.Count == 0)
            return NotFound();
       var queryResult = await modemRepository.GetsByQuery(site.modemler,modemQuery);
      
        var queryResultResource = new QueryResultResource<ModemListeleResource>();
            queryResultResource.TotalItems = queryResult.TotalItems;
            var modemler = new List<ModemListeleResource>();
            foreach (var item in queryResult.Items)
            {
                var kazan = await kazanRepository.FindOne(item.kazanId);
                var modemResource = mapper.Map<Modem,ModemListeleResource>(item);

                modemResource.kazan = new KeyValue(){adi = kazan.adi,Id = kazan.Id};
                modemler.Add(modemResource);
            }
            queryResultResource.Items = modemler;
            return Ok(queryResultResource);
                
    }





}