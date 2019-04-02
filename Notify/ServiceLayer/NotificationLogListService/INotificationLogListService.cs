using System;
using System.Collections.Generic;
using System.Text;

namespace ServiceLayer.NotificationLogListService
{
    public interface INotificationLogListService
    {
        NotificationLogDTOList GetNotificationLogsList(LogCriterion criterion);
    }
}
