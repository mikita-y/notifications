using System;
using System.Collections.Generic;
using System.Text;

namespace ServiceLayer.ListService
{
    public interface IListService
    {
        ObjectNotificationsDTO FilterSortingPaging(Criterion criterion);
    }
}
