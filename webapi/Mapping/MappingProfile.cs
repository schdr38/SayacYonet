using System;
using AutoMapper;
using webapi.Controllers.Resources;
using webapi.Controllers.Resources.Blok;
using webapi.Controllers.Resources.BlokFolder;
using webapi.Controllers.Resources.Daire;
using webapi.Controllers.Resources.Modem;
using webapi.Controllers.Resources.Sayac;
using webapi.Core.Models;
using webapi.Core.Models.Bloklar;
using webapi.Core.Models.Daire;
using webapi.Core.Models.Kazan;
using webapi.Core.Models.Modem;
using webapi.Core.Models.Sayac;
using webapi.Core.Models.Site;

namespace webapi.Mapping
{
    public class MappingProfile:Profile
    {
        public MappingProfile()
        {
            //Domain to Domain
            CreateMap<Kazan,KazanListeleModel>();
            CreateMap<Blok,BlokListeleModel>();


            /********************API to Domain*******************/
            CreateMap(typeof(QueryResult<>), typeof(QueryResultResource<>));
            CreateMap<SiteResource,Site>()
            .ForMember(s=>s.kazanlar,opt=>opt.Ignore())
            .ForMember(s=>s.bloklar,opt=>opt.Ignore());
            CreateMap<SiteQueryResource,SiteQuery>();

  
            //Kazanlar
             CreateMap<KazanResource,Kazan>();
             CreateMap<KazanListeleResource,Kazan>();
             CreateMap<KazanQueryResource,KazanQuery>();
             
             //Bloklar
             CreateMap<BlokResource,Blok>();
             CreateMap<BlokListeleResource,Blok>();
             CreateMap<BlokQueryResource,BlokQuery>();
             CreateMap<BlokDuzenleResource,Blok>()
             .ForMember(b=>b.kazanId,opt=>opt.MapFrom(br=>br.kazan.Id));

            //Daireler
            CreateMap<DaireEkleResource,Daire>();
            CreateMap<DaireUpdateResource,Daire>();
            CreateMap<DaireQueryResource,DaireQuery>();

            //Modemler
            CreateMap<ModemEkleResource,Modem>();
            CreateMap<ModemDuzenleResource,Modem>();
            CreateMap<ModemQueryResource,ModemQuery>();

            //Sayaclar
            CreateMap<SayacEkleResource,Sayac>();
            CreateMap<SayacQueryResource,SayacQuery>();

            /********************API to Domain*******************/



            //Domain to API
            CreateMap<Site,SiteResource>();
            CreateMap<KazanListeleModel,KazanListeleResource>();
            CreateMap<Kazan,KazanListeleResource>();
            CreateMap<KeyValue,KeyValueResource>();
            CreateMap<BlokListeleModel,BlokListeleResource>();
            CreateMap<Blok,BlokResource>();
            CreateMap<Blok,BlokDuzenleResource>();
            CreateMap<Blok,BlokListeleResource>();
            CreateMap<Kazan,KazanResource>();
            CreateMap<Daire,DaireEkleResource>();
            CreateMap<Daire,DaireUpdateResource>();
            CreateMap<Modem,ModemListeleResource>();
            CreateMap<Sayac,SayacUpdateResource>();

            //Kazanlar
            
        }
    }
}