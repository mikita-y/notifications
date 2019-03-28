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
        private IQueryable<Notification> notifications;
        private int AllPages;

        public NotificationListService(NotifyContext _context)
        {
            context = _context;  
        }

        public ObjectNotificationsDTO FilterSortingPaging(Criterion criterion)
        {
            notifications = context.Notifications.Where(x => x.UserId == criterion.UserId).SortingBy(criterion).Filter(criterion);

            //notifications = notifications.SortingBy(criterion).Filter(criterion);

            AllPages = notifications.Count();

            var NotificationsDTOList = notifications.GetPageOfItems(criterion.Page, criterion.PageSize).GetNotificationDTO().ToList();

            return new ObjectNotificationsDTO { PageNumber = criterion.Page, AllPages = this.AllPages, Notifications = NotificationsDTOList };
        }
 /*
        private void SortingBy(Sorting s)
        {
            switch (s)
            {
                case Sorting.AZ:
                    notifications = notifications.OrderBy(n => n.Title);
                    break;
                case Sorting.ZA:
                    notifications = notifications.OrderByDescending(n => n.Title);
                    break;
                case Sorting.Newer:
                    {
                        notifications = notifications.SelectMany(n => n.Logs,
                            (n, l) => new { notification = n, Log = l })
                          .Where(p => p.Log.Date == p.notification.Logs.Max(l => l.Date))  // Max - дата изменения, Min - дата создания
                          .OrderByDescending(p => p.Log.Date).Select(p => p.notification);
                    }
                    break;
                case Sorting.Older:
                    {
                        notifications = notifications.SelectMany(n => n.Logs,
                            (n, l) => new { notification = n, Log = l })
                          .Where(p => p.Log.Date == p.notification.Logs.Max(l => l.Date))  // Max - дата изменения, Min - дата создания
                          .OrderBy(p => p.Log.Date)
                          .Select(p => p.notification);
                    }
                    break;
                default:
                    throw new Exception("Exception in NotificationServise.SortingBy");
            }
        }

        private void Filter(FilterBy[] filterby, string searchtext = "")
        {
            foreach (FilterBy f in filterby)
            {
                switch (f)
                {
                    case FilterBy.Title:
                        notifications = notifications.Where(n => n.Title.Contains(searchtext));
                        break;
                    case FilterBy.Body:
                        notifications = notifications.Where(n => n.Body.Contains(searchtext));
                        break;
                    case FilterBy.Picture:
                        notifications = notifications.Where(n => n.Icon != null);
                        break;
                    case FilterBy.Image:
                        notifications = notifications.Where(n => n.Image != null);
                        break;
                    default: throw new Exception("Exception in NotificationServise.Filter");
                }
            }
        }

        private void Paging(int page, int pagesize)
        {
            notifications = notifications.GetPageOfItems(page, pagesize);
        }
        */
    }
}
