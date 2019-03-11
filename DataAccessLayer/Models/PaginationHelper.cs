using System;
using System.Collections.Generic;
using System.Text;
using System.Linq;

namespace DataAccessLayer.Models
{
    public static class PaginationHelper
    {
        public static IQueryable<TEntity> GetPageOfItems<TEntity>(this IQueryable<TEntity> items,  int Page, int PageSize = 10)
        {
            return items.Skip((Page) * PageSize).Take(PageSize);
        }

    }
}
