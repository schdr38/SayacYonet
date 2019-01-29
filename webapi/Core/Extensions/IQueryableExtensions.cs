using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using MongoDB.Driver.Linq;

namespace webapi.Core.Extensions
{
    public static class IQueryableExtensions
    {
        public static IMongoQueryable<T> ApplyPaging<T>(this IMongoQueryable<T> query ,IQueryObject queryObject)
        {
             if(queryObject.Page<=0)
                queryObject.Page = 1;
            if(queryObject.PageSize<=0)
                queryObject.PageSize = 10;
          var siteler = query.Skip((queryObject.Page - 1) * queryObject.PageSize).Take(queryObject.PageSize);
         return siteler ; 
        }

        public static IMongoQueryable<T> ApplyOrdering<T>(this IMongoQueryable<T> query,IQueryObject queryObject,Dictionary<string,Expression<Func<T,object>>> columnsMap)
        {
            if(String.IsNullOrEmpty(queryObject.SortBy) || !columnsMap.ContainsKey(queryObject.SortBy))
                return query;
            if(queryObject.IsSortAscending)
                return query.OrderBy(columnsMap[queryObject.SortBy]);
            else
                return query.OrderByDescending(columnsMap[queryObject.SortBy]);
        }


                public static IQueryable<T> ApplyPaging<T>(this IQueryable<T> query ,IQueryObject queryObject)
        {
             if(queryObject.Page<=0)
                queryObject.Page = 1;
            if(queryObject.PageSize<=0)
                queryObject.PageSize = 10;
          var siteler = query.Skip((queryObject.Page - 1) * queryObject.PageSize).Take(queryObject.PageSize);
         return siteler ; 
        }

        public static IQueryable<T> ApplyOrdering<T>(this IQueryable<T> query,IQueryObject queryObject,Dictionary<string,Expression<Func<T,object>>> columnsMap)
        {
            if(String.IsNullOrEmpty(queryObject.SortBy) || !columnsMap.ContainsKey(queryObject.SortBy))
                return query;
            if(queryObject.IsSortAscending)
                return query.OrderBy(columnsMap[queryObject.SortBy]);
            else
                return query.OrderByDescending(columnsMap[queryObject.SortBy]);
        }
        
    }
}