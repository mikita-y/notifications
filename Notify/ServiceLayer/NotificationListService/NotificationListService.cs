using System;
using System.Collections.Generic;
using System.Text;
using DataAccessLayer.Models;
using DataAccessLayer;
using DataAccessLayer.DbContext;
using System.Linq;

namespace ServiceLayer.NotificationListService
{
    public class NotificationListService : INotificationListService
    {

        private NotifyContext context;

        public NotificationListService(NotifyContext _context)
        {
            context = _context;  
        }

        public ObjectNotificationsDTO FilterSortingPaging(Criterion criterion)
        {
            IQueryable<Notification> notifications = context.Notifications.Where(x => x.UserId == criterion.userId);

            notifications = context.Notifications.Where(x => x.UserId == criterion.userId).SortingBy(criterion).Filter(criterion);

            int allPages = notifications.Count() / criterion.pageSize;
            if ((notifications.Count() % criterion.pageSize) >= 0)
                allPages++;
            if (criterion.pageSize == 0)
                criterion.pageSize = 10;
            var NotificationsDTOList = notifications.GetPageOfItems(criterion.page - 1, criterion.pageSize).GetNotificationDTO().ToList();

            return new ObjectNotificationsDTO { PageNumber = criterion.page, AllPages = allPages, Notifications = NotificationsDTOList };
        }

    }
}
