using DataAccessLayer.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace ServiceLayer.NotificationLogListService
{
    public static class NotificationLogDTOMapper
    {
        public static IQueryable<NotificationLogDTO> GetNotificationLogDTO(this IQueryable<NotificationLog> items)
        {
            return items.Select(log => new NotificationLogDTO { Date = log.Date, Change = log.Change });
        }
    }
}
