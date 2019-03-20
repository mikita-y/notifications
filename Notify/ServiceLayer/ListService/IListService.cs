using System;
using System.Collections.Generic;
using System.Text;

namespace ServiceLayer.ListService
{
    public interface IListService
    {
        List<NotificationDTO> FilterSortingPaging(Criterion criterion);
    }
}
