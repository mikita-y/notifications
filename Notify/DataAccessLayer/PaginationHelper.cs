using System.Linq;

namespace DataAccessLayer
{
    public static class PaginationHelper
    {
        public static IQueryable<TEntity> GetPageOfItems<TEntity>(this IQueryable<TEntity> items, int Page = 0, int PageSize = 10)
        {
            return items.Skip((Page) * PageSize).Take(PageSize);
        }
    }
}
