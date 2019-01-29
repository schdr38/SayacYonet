
using System.Collections.Generic;
using System.Threading.Tasks;
using webapi.Core.Extensions;
using webapi.Core.Models;
using webapi.Core.Models.Modem;

namespace webapi.Core.IRepository
{
     public interface IModemRepository:IGenericRepository<Modem>
    {
       Task<QueryResult<Modem>> GetsByQuery(List<string> modemIdler,IQueryObject queryObject);

    }
}