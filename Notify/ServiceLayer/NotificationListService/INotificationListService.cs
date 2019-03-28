using System;
using System.Collections.Generic;
using System.Text;

namespace ServiceLayer.NotificationListService
{
    public interface INotificationListService
    {
        ObjectNotificationsDTO FilterSortingPaging(Criterion criterion);
    }
}
