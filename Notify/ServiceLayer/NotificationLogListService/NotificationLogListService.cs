using System;
using System.Collections.Generic;
using System.Text;
using DataAccessLayer.Models;
using DataAccessLayer;
using DataAccessLayer.DbContext;
using System.Linq;

namespace ServiceLayer.NotificationLogListService
{
    public class NotificationLogListService : INotificationLogListService
    {
        private NotifyContext context;

        public NotificationLogListService(NotifyContext _context)
        {
            context = _context;  
        }

        public NotificationLogDTOList GetNotificationLogsList(LogCriterion criterion)
        {
            var logs = context.NotificationLogs.Where(log => log.NotificationId == criterion.NotificationId).GetNotificationLogDTO();
            if (criterion.PageSize == 0)
                criterion.PageSize = 10;
            logs = logs.GetPageOfItems(criterion.Page, criterion.PageSize);
            return new NotificationLogDTOList { LogList = logs.ToList(), Page = criterion.Page, PageSize = criterion.PageSize };
        }

    }
}
