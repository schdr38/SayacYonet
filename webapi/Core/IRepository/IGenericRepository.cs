using System.Collections;
using System.Threading.Tasks;
using webapi.Core.Extensions;
using webapi.Core.Models;

namespace webapi.Core.IRepository
{
    public  interface IGenericRepository<T> where T : BaseEntity
    {
        Task<T> AddAsync(T entity);
        bool Delete(T entity);
        Task<ICollection> GetAll();
        Task<QueryResult<T>> GetsByQuery(IQueryObject queryObject);
        Task<T> FindOne(string id);
        Task<bool> UpdateAsync(T entity);

    }
}