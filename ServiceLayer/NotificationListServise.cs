using System;
using System.Collections.Generic;
using System.Text;
using DataAccessLayer.Models;
using ServiceLayer.Interfaces;
using ServiceLayer.DTO;
using Microsoft.EntityFrameworkCore;
using System.Linq;


namespace ServiceLayer
{
    public enum Sorting { AZ, ZA, Newer, Older };
    public enum FilterBy { Title, Body, Image, Picture };

    public class NotificationListServise : INotificationSorting, INotificationFiltering
    {
        private IQueryable<Notification> notifications;

        public NotificationListServise(IQueryable<Notification> DatabaseNotifications)
        {
            notifications = DatabaseNotifications;
        }

        public void SortingBy(Sorting s)
        {
            switch (s)
            {
                case Sorting.AZ:
                    notifications = notifications.OrderBy(n => n.Title);
                    break;
                case Sorting.ZA:
                    notifications = notifications.OrderByDescending(n => n.Title);
                    break;
                case Sorting.Newer :
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

        public void Filter( List<FilterBy> filterby, string text = "")
        {
            foreach(FilterBy f in filterby)
            {
                switch(f)
                {
                    case FilterBy.Title:
                        notifications = notifications.Where(n => n.Title.Contains(text));
                        break;
                    case FilterBy.Body:
                        notifications = notifications.Where(n => n.Body.Contains(text));
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

        public IQueryable<Notification> GetNotifications()
        {
            return notifications;
        }

        public IQueryable<NotificationDTO> GetNotificationDTOs()
        {
            return notifications.GetNotificationDTO();
        }
    }
}
