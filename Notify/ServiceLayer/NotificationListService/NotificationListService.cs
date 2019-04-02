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
            IQueryable<Notification> notifications = context.Notifications.Where(x => x.UserId == criterion.UserId);

            notifications = context.Notifications.Where(x => x.UserId == criterion.UserId).SortingBy(criterion).Filter(criterion);
            
            int allPages = notifications.Count();
            if (criterion.PageSize == 0)
                criterion.PageSize = 10;
            var NotificationsDTOList = notifications.GetPageOfItems(criterion.Page, criterion.PageSize).GetNotificationDTO().ToList();

            return new ObjectNotificationsDTO { PageNumber = criterion.Page, AllPages = allPages, Notifications = NotificationsDTOList };
        }

    }
}
