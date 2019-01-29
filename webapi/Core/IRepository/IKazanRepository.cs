using MongoDB.Driver.Linq;
using System.Threading.Tasks;
using webapi.Core.Models;
using System.Linq.Expressions;
using System.Linq;
using System.Collections;
using webapi.Core.Extensions;
using System.Collections.Generic;
using webapi.Core.Models.Kazan;

namespace webapi.Core.IRepository
{
     public interface IKazanRepository:IGenericRepository<Kazan>
    {
      Task<QueryResult<Kazan>> GetsByQuery(List<string> kazanIdler,IQueryObject queryObject);

    }
}