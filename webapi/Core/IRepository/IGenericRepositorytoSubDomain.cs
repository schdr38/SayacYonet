using System.Collections;
using System.Threading.Tasks;
using webapi.Core.Extensions;
using webapi.Core.Models;

namespace webapi.Core.IRepository
{
    public interface IGenericRepositorytoSubDomain<T> where T:BaseEntity
    {
        Task<bool> AddAsync(string parentId,T entity);
        bool Delete(T entity);
        Task<QueryResult<T>> GetsByQuery(IQueryObject queryObject);
        Task<T> FindOneAsync(string id);
        Task<bool> UpdateAsync(T entity);

    }
}