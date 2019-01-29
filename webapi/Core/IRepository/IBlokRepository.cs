

using System.Collections.Generic;
using System.Threading.Tasks;
using webapi.Core.Extensions;
using webapi.Core.Models;
using webapi.Core.Models.Bloklar;

namespace webapi.Core.IRepository
{
    public interface IBlokRepository:IGenericRepository<Blok>
    {
        Task<QueryResult<Blok>> GetsByQuery(List<string> blokIdler,IQueryObject queryObject);
        Task<Blok> BlokGetirBySayacIdAsync(string id);

    }
}