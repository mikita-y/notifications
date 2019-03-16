using System;
using System.Collections.Generic;
using System.Text;

namespace ServiceLayer.ListService
{
    public interface IListService<T>
    {
        void FilterSortingPaging(Сriterion criterion);
        List<T> GetItems();
    }
}
